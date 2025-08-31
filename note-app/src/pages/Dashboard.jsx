import React, { useEffect, useState } from "react"
import { Trash2 } from "lucide-react"
import Navbar from "../Components/Navbar"

function Dashboard() {
  const [user, setUser] = useState(null)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [newNote, setNewNote] = useState("") // input box state

  const token = localStorage.getItem("token")

  useEffect(() => {
    const fetchUser = () => {
      const storedUser = localStorage.getItem("user")
      if (storedUser) setUser(JSON.parse(storedUser))
    }
    fetchUser()

    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:5000/notes", {
          headers: { Authorization: `Bearer ${token}` }
        })
        const data = await res.json()
        setNotes(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    if (token) fetchNotes()
  }, [token])

  const createNote = async () => {
    if (!newNote.trim()) return
    try {
      const res = await fetch("http://localhost:5000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ text: newNote })
      })
      const newNoteData = await res.json()
      setNotes(prev => [...prev, newNoteData])
      setNewNote("") // clear input after save
    } catch (err) {
      console.error(err)
    }
  }

  const deleteNote = async (id) => {
    try {
      await fetch(`http://localhost:5000/notes/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      })
      setNotes(prev => prev.filter(n => n.id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  if (!token) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-xl font-bold">Please log in first</h1>
      </div>
    )
  }

  return (
    <div className="px-4">
      <Navbar />
      {user && (
        <div className="border-2 border-[#222222a7] rounded-xl p-7 mt-4">
          <h1 className="font-bold text-lg sm:text-xl">
            Welcome, {user.name}!
          </h1>
          <p className="text-sm sm:text-base">Email: {user.email}</p>
        </div>
      )}

      {/* input field to create note */}
      <div className="mt-6 flex gap-2 max-w-lg">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a note..."
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button
          onClick={createNote}
          className="px-4 py-2 rounded-lg text-white bg-blue-700 hover:bg-blue-800"
        >
          Add
        </button>
      </div>

      {/* notes list */}
      <div className="mt-5 space-y-4 max-w-lg">
        {loading ? (
          <p>Loading...</p>
        ) : notes.length === 0 ? (
          <p>No notes found</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="flex items-center justify-between bg-[#dbdbdb] rounded-lg px-4 py-2"
            >
              <h1 className="text-sm sm:text-base">{note.text}</h1>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-black hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Dashboard
