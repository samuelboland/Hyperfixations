import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
    AiOutlineBold,
    AiOutlineItalic,
    AiOutlineStrikethrough,
    AiOutlineUnderline,
    AiOutlineCode,
    AiOutlineUnorderedList,
    AiOutlineOrderedList,
    AiOutlineLine,
    AiOutlineUndo,
    AiOutlineRedo,
} from 'react-icons/ai';

import { BsChatRightQuote } from 'react-icons/bs';

import styles from './Tiptap.module.scss';

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <AiOutlineBold />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                <AiOutlineItalic />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                <AiOutlineStrikethrough />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
                <AiOutlineCode />
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                p
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
                h1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
                h2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
                h3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
            >
                h4
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
            >
                h5
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
            >
                h6
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                <AiOutlineUnorderedList />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                <AiOutlineOrderedList />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
                <BsChatRightQuote />
            </button>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <AiOutlineLine />
            </button>
            <button onClick={() => editor.chain().focus().undo().run()}>
                <AiOutlineUndo />
            </button>
            <button onClick={() => editor.chain().focus().redo().run()}>
                <AiOutlineRedo />
            </button>
        </>
    );
};

const Tiptap = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
    });

    return (
        <main className={styles.editor}>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </main>
    );
};

export default Tiptap;
