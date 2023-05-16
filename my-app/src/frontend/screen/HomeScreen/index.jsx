
import { theme } from '../../theme/theme';
import { Image, Box, Text, Icon, Input, Button } from '../../theme/components';
import AsideBar from "../../components/Aside/index"
import { useState } from 'react';
import styles from './styles.module.css'
import FormPrimary from "../../components/FormPrimary/index"
import FormSecundary from "../../components/FormSecundary/index"
import Head from "../../components/Head/index"
import ImageNext from 'next/image';
export default function HomeScreen() {
  const [form, setForm] = useState(0)
  function alterForm(){
    if(!form){
      setForm(1)
    }else{
      setForm(0)
    }
  }
  return (
    <Box className={styles.container}>
      <AsideBar/>
      <div className={styles.containerOrganization}>
        <Head/>
        <div className={styles.containerForm}>
          <div className={styles.container_description}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam maxime, placeat necessitatibus, vero quidem ratione minus quae quia ea suscipit fugit amet dolore doloremque non dolores reprehenderit quos eius excepturi id adipisci! Iste nemo veritatis aut vel cum voluptatibus consectetur enim aperiam, minima doloremque non? Nam amet impedit mollitia sit recusandae inventore dignissimos exercitationem quos quam optio dolorum perferendis deleniti repellat, accusamus dicta quis harum beatae provident odit aspernatur. Amet similique molestiae ut ipsam sunt saepe quo temporibus, et placeat ducimus rem omnis est tenetur in quod a blanditiis nobis? Earum adipisci quia possimus. Mollitia harum rem, optio exercitationem iure at eos voluptate? Necessitatibus quasi incidunt quo perspiciatis. Voluptatibus, similique quibusdam! At nobis voluptatibus doloremque magnam quidem vero sunt fugiat eius, modi placeat earum. Expedita libero, quam, nobis, voluptates suscipit dolor quisquam sequi aspernatur necessitatibus voluptatem quis ex aliquid sapiente excepturi quos deserunt consectetur possimus debitis. Nihil ab debitis placeat, distinctio vitae corporis tenetur quos fugit illo dolorum nesciunt excepturi consectetur veritatis repudiandae, ex veniam minus commodi cupiditate! Ab molestias illo natus consequatur blanditiis sunt perspiciatis officiis rerum fuga. Distinctio aperiam ipsa impedit! Perspiciatis, deserunt quia quo quasi itaque, accusantium modi pariatur amet aliquam molestias non. Quidem dolorum tenetur corrupti minus dolores nostrum suscipit dolorem commodi? A totam ipsam voluptate alias minima sed numquam assumenda, esse rem illo iure corrupti reiciendis accusamus! Voluptas suscipit praesentium delectus, eveniet possimus eum, sed blanditiis voluptate necessitatibus consequatur, eaque rerum id expedita. Dignissimos, harum eaque in maiores officiis veniam dolores porro hic ratione. Ea iure quidem placeat aperiam asperiores ut, quod sed qui! Ratione dicta exercitationem, minima animi laborum in quasi repudiandae, impedit, temporibus excepturi quaerat. Ratione dolore, tempora a eligendi molestiae maiores nam pariatur sapiente qui quia minus, praesentium enim! Aspernatur exercitationem dolorem qui sequi expedita sint saepe et dignissimos accusantium ab.</p>
          <ImageNext src="/assets/pessoa.svg" width={142} height={159}/>
          </div>
        {form == 0 ? <FormPrimary alterForm={alterForm}/>:<FormSecundary alterForm={alterForm}/>}
        </div>
        
      </div>
      
      
    </Box >
  )
}