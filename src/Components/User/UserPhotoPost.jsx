import styles from './UserPhotoPost.module.css'
import {Input} from '../Form/Input'
import {Button} from '../Form/Button'
import {useForm} from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import React from 'react'
import { PHOTO_POST } from '../../api'
import {Error} from '../Interface/Error'
import { useNavigate } from 'react-router-dom'
import Head from '../Interface/Head'


const UserPhotoPost = () => {
  const name = useForm();
  const model = useForm();
  const year = useForm("number");
  const [img, setImg] = React.useState({});
  const {data, error, loading, request} = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(data) navigate('/conta')
  }, [data, navigate]);


  function handleImgChange ({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function handleSubmit (event) {
    event.preventDefault()
    const formData = new FormData(); //é usado o form data poque o formulário vai enviar imagem também
      formData.append('nome', name.value);
      formData.append('peso', model.value);
      formData.append('idade', year.value);
      formData.append('img', img.raw);

    const token = window.localStorage.getItem('token');  
    const {url, options} = PHOTO_POST(token, formData);
    request(url, options)
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua Foto" description="Envie uma foto para o Road" />
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...name}/>
        <Input label='Modelo' type='text' name='peso' {...model}/>
        <Input label='Ano' type='number' name='idade' {...year}/>
        <input className={styles.files} type='file' name='img' id='img' onChange={handleImgChange}/>
        {loading ? (
          <Button disabled>A Caminho...</Button>
        ) : (
          <Button>Rodar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (<div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>) }
      </div>
    </section>
  )
}

export default UserPhotoPost
