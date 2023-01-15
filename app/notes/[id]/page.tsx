import PocketBase from "pocketbase";
import styles from "../Notes.module.css";

export const revalidate = 10;

async function getNote(noteId: string) {
    const db = new PocketBase("http://127.0.0.1:8090");
    const res = await db.collection("notes").getOne(noteId);
    return res;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);

    return (
        <div>
            <h1>notes/{note.id}</h1>
            <div className={styles.note}>
                <h3>{note.title}</h3>
                <h5>{note.description}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    );
}
