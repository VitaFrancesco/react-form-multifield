import { useState } from 'react'
import style from './AddBlog.module.css'

export default function AddBlog({ onSubmit }) {

    const [post, setPost] = useState({
        title: '',
        content: '',
        image: undefined,
        tags: [],
        published: true
    })


    function articleSubmit(e, f) {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        f(newPost);
    }

    function onChange(e) {
        const value = e.target.type === "checkbox" ?
            e.target.checked : e.target.value;
        setPost({
            ...post,
            [e.target.name]: value
        })
    }


    return (
        <div className='container'>
            <form className='form' onSubmit={(event) => articleSubmit(event, onSubmit)}>
                <input type="text" name='title' onChange={(e) => onChange(e)} value={post.title} placeholder={`Titolo dell'articolo`} />
                <select name='image' value={post.image} onChange={(e) => onChange(e)}>
                    <option value={undefined}>Nessuna immagine</option>
                    <option value="../img/post2.jpg">Koeniggseg</option>
                    <option value="../img/post4.jpg">Panorama</option>
                    <option value="../img/post3.jpg">Romani</option>
                </select>
                <label htmlFor="select-image">Seleziona l'immagine</label>
                <textarea name='content' className={style.textarea} placeholder='Scrivi il contenuto del post qui...' onChange={(e) => onChange(e)} value={post.content} ></textarea>
                <div className={style.dFlex}>
                    {/* <div className={style.tags}>
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
                    </div> */}
                    {/* <div>
                        <input type="radio" id="published-true" name='published' checked={true} onChange={(e) => onChange(e)} />
                        <label htmlFor="published-true">Pubblico</label>
                    </div>
                    <div>
                        <input type="radio" id="published-false" name='published' checked={false} onChange={(e) => onChange(e)} />
                        <label htmlFor="published-false">Privato</label>
                    </div> */}
                    <button type='submit'>Aggiungi</button>
                </div>
            </form>
        </div>
    )
}