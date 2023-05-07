
import { theme } from '../../theme/theme';
import { Image, Box, Text, Icon, Input, Button } from '../../theme/components';
import AsideBar from "../../components/Aside/index"
import { useState } from 'react';
import styles from './styles.module.css'
import FormPrimary from "../../components/FormPrimary/index"
import Head from "../../components/Head/index"
import ImageNext from 'next/image';
export default function HomeScreen() {
  

  return (
    <Box className={styles.container}>
      <AsideBar/>
      <div className={styles.containerOrganization}>
        <Head/>
        <div className={styles.containerForm}>
          <div className={styles.container_description}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ipsum assumenda, ipsa corporis reprehenderit asperiores sit rerum nobis minima rem, doloribus voluptas officia dolores, illo ullam tenetur obcaecati dicta nemo!</p>
          <ImageNext src="/assets/pessoa.svg" width={142} height={159}/>
          </div>
        <FormPrimary/>
        </div>
        
      </div>
      
      
    </Box >
  )
}