import { useState } from 'react'
import styles from './style.module.css'
import { Button } from 'antd'

export default function CardFuncionario({funcionario}) {
    
    return (
    <div className={styles.card_container}>
        <div className={styles.description}>
        <h1 className={styles.tittleFunc}>{funcionario.nome}</h1>
        <div className={styles.div_infos}>
            <Button>{funcionario.cpf}</Button>
            <Button>Atv {funcionario.Epis }</Button>
            <Button>Cargo {funcionario.cargo}</Button>
        </div>
        
        </div>
        <button className={styles.buttonVertical}>...</button>
    </div>
)
}   