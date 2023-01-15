"use client";

import { useState } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

export default function CreateNote() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const create = async () => {
        const db = new PocketBase("http://127.0.0.1:8090");
        db.collection("notes").create({
            title: title,
            description: description,
            completed: false,
            important: false,
        });
        setTitle("");
        setDescription("");
        router.refresh();
    };

    return (
        <form onSubmit={create}>
            <h3>Create a new note</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            ></input>
            <textarea
                placeholder="description"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            ></textarea>
            <button type="submit">Create note</button>
        </form>
    );
}
