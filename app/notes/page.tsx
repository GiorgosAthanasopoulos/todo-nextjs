import Link from "next/link";
import styles from "./Notes.module.css";
import PocketBase from "pocketbase";
import CreateNote from "./CreateNote";

export const dynamic = "auto",
    dynamicParams = true,
    revalidate = 0,
    fetchCache = "auto",
    runtime = "nodejs",
    preferredRegion = "auto";

async function getNotes() {
    const db = new PocketBase("http://127.0.0.1:8090");
    const data = await db.collection("notes").getList();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();

    return (
        <div>
            <h1>Notes</h1>
            <div className={styles.grid}>
                {notes.map((note) => {
                    return <Note key={note.id} note={note}></Note>;
                })}
            </div>
            <CreateNote></CreateNote>
        </div>
    );
}

function Note({ note }: any) {
    const { id, title, description, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className={styles.note}>
                <h2>{title}</h2>
                <h5>{description}</h5>
                <p>{created}</p>
            </div>
        </Link>
    );
}
