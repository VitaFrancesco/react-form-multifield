import { useState } from 'react'
import style from './AddBlog.module.css'

export default function AddBlog({ onSubmit }) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(undefined)
    const [published, setPublished] = useState(undefined)
    const [tags, setTags] = useState([]);


    function articleSubmit(e, f) {
        e.preventDefault();
        if (title === '') return;
        const newPost = {
            id: Date.now(),
            title: title,
            image: image,
            content: content,
            tags: [],
            published: published,
        }
        console.log(newPost)
        setTitle('');
        setContent('');
        setImage(undefined);
        setPublished(undefined)
        f(newPost);
    }


    return (
        <div className='container'>
            <form className='form' onSubmit={(event) => articleSubmit(event, onSubmit)}>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder={`Titolo dell'articolo`} />
                <select value={image} onChange={(e) => setImage(e.target.value)}>
                    <option value={image}>Nessuna immagine</option>
                    <option value="../img/post2.jpg">Koeniggseg</option>
                    <option value="../img/post4.jpg">Panorama</option>
                    <option value="../img/post3.jpg">Romani</option>
                </select>
                <label htmlFor="select-image">Seleziona l'immagine</label>
                <textarea className={style.textarea} placeholder='Scrivi il contenuto del post qui...' onChange={(e) => setContent(e.target.value)} value={content} ></textarea>
                <div className={style.dFlex}>
                    <div className={style.tags}>
                        <div>
                            <input type="checkbox" id='html' checked='html' onChange={(e) => setTags([...tags, e.target.checked])} />
                            <label htmlFor="html">html</label>
                        </div>
                        <div>
                            <input type="checkbox" id='css' checked='css' onChange={(e) => setTags([...tags, e.target.checked])} />
                            <label htmlFor="css">css</label>
                        </div>
                        <div>
                            <input type="checkbox" id='js' checked='js' onChange={(e) => setTags([...tags, e.target.checked])} />
                            <label htmlFor="js">js</label>
                        </div>
                        <div>
                            <input type="checkbox" id='php' checked='php' onChange={(e) => setTags([...tags, e.target.checked])} />
                            <label htmlFor="php">php</label>
                        </div>
                    </div>
                    <div>
                        <input type="radio" id="published-true" value={true} checked={published === true} onChange={() => setPublished(true)} />
                        <label htmlFor="published-true">Pubblico</label>
                    </div>
                    <div>
                        <input type="radio" id="published-false" value={false} checked={published === false} onChange={() => setPublished(false)} />
                        <label htmlFor="published-false">Privato</label>
                    </div>
                    <button type='submit'>Aggiungi</button>
                </div>
            </form>
        </div>
    )
}