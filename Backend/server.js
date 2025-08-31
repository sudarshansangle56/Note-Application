const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const jwt = require("jsonwebtoken")

const app = express()
app.use(cors())
app.use(bodyParser.json())

const SECRET = "mysecret"

let users = []
let otps = {}
let notes = []

// Middleware: JWT Authentication
function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) return res.status(401).json({ message: "No token" })
  try {
    const decoded = jwt.verify(token, SECRET)
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ message: "Invalid token" })
  }
}

// Request OTP
app.post("/auth/request-otp", (req, res) => {
  const { email } = req.body
  if (!email) return res.status(400).json({ message: "Email required" })

  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  otps[email] = otp
  console.log("OTP for", email, "=", otp) // still logs for debugging

  // 👇 send OTP in response (for demo only!)
  res.json({ message: "OTP generated", otp })
})

// Verify OTP
app.post("/auth/verify-otp", (req, res) => {
  const { email, otp } = req.body
  if (otps[email] !== otp) return res.status(401).json({ message: "Invalid OTP" })

  let user = users.find(u => u.email === email)
  if (!user) {
    user = { id: Date.now(), name: email.split("@")[0], email }
    users.push(user)
  }

  delete otps[email]

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "1h" })
  res.json({ token, user })
})

// Notes routes
app.get("/notes", auth, (req, res) => {
  res.json(notes.filter(n => n.userId === req.user.id))
})

app.post("/notes", auth, (req, res) => {
  const note = { id: Date.now(), text: req.body.text, userId: req.user.id }
  notes.push(note)
  res.json(note)
})

app.put("/notes/:id", auth, (req, res) => {
  const note = notes.find(n => n.id == req.params.id && n.userId === req.user.id)
  if (!note) return res.status(404).json({ message: "Not found" })
  note.text = req.body.text
  res.json(note)
})

app.delete("/notes/:id", auth, (req, res) => {
  notes = notes.filter(n => !(n.id == req.params.id && n.userId === req.user.id))
  res.json({ success: true })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))
