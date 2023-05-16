import { Button } from 'antd'
import styles from './style.module.css'
import { Switch, } from 'antd';
import CardFuncionario from '../Card/index'
import { useState, useEffect } from 'react';
import ServicosUsuarios  from "../../../backend/services"

export default function FormPrimary({ alterForm }) {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const carregarUsuarios = async () => {
            try {
                const servicosUsuarios = new ServicosUsuarios();
                const usuarios = await servicosUsuarios.obterUsuarios();
                
                setUsuarios(usuarios);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };

        carregarUsuarios();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.head_container}> <h1>Funcionarios</h1></div>
            <div className={styles.buttons}>
                <button className={styles.adicionar} onClick={alterForm} > + Adicionar Funcionário</button>
                <div className={styles.container_row}>
                    <Button size='medium'>Ver apenas ativos</Button>
                    <Button size='medium'>Limpar filtros</Button>
                </div>
            </div>
            <div className={styles.container_cards}>
                {usuarios.map(item => <CardFuncionario funcionario={item} />)}
            </div>

            <div className={styles.question}>
                <h5>A estapa está concluída?</h5>
                <Switch checkedChildren="Sim" unCheckedChildren="Não" defaultChecked />
            </div>
            <div className={styles.question}>
                <button className={styles.buttonSucess}>Próximo passo</button>
            </div>



        </div>


    )
}