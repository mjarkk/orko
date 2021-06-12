import { useState, KeyboardEvent, useEffect } from "react"

interface Args {
    children: any
    value: string
    save: (value: string) => void
    placeholder?: string
}

export default function EditableH1({ children, value, save, placeholder }: Args) {
    const [editing, isEditing] = useState(false)
    const [editValue, setEditValue] = useState('')

    const nameEditKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code == 'Enter') setEditValue(v => {
            save(v)
            return ''
        })
        else if (e.code == 'Escape') setEditValue('')
        else return
        isEditing(false)
    }

    useEffect(() => {
        if (!editing) setEditValue(value)
    }, [value, editing])

    return <h1 onClick={() => isEditing(true)}>
        {editing
            ? <input
                autoFocus
                placeholder={placeholder}
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                onKeyUp={nameEditKeyPress}
            />
            : children
        }
        <style jsx>{`
            .editable {
                cursor: pointer;
            }
            h1 {
                background-color: transparent;
                transition: background-color 0.2s;
                border-radius: 5px;
                ${!editing ? `
                    padding: 5px;
                `: ''}
                cursor: pointer;
            }
            h1:hover {
                background-color: white;
            }
            input {
                cursor: text;
                padding: 4px;
                border-width: 1px;
                border-radius: 5px;
                width: 100%;
            }
        `}</style>
    </h1>
}
