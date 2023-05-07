import { Button } from 'antd'
import styles from './style.module.css'
import { Switch, } from 'antd';
import CardFuncionario from '../Card/index'



export default function FormPrimary() {

    const arrFuncionarios = [
        {
            "nome": "raphael",
            "sexo": "M",
            "cpf": "321.989.788-65",
            "data de nascimento": "02/07/2001",
            "RG": "3504358",
            "cargo": 2,
            "usaEpi": true,
            "Epis": [
                {
                    "atividade": 1,
                    "nome": "calçado de segurança",
                    "numeroDoCA": 9878
                }
            ],
            "estado de saude": "document.png "
        }
    ]
    return (
        <div className={styles.container}>
            <div className={styles.head_container}> <h1>Funcionarios</h1></div>
            <div className={styles.buttons}>
                <button className={styles.adicionar}> + Adicionar Funcionário</button>
                <div className={styles.container_row}>
                    <Button size='medium'>Ver apenas ativos</Button>
                    <Button size='medium'>Limpar filtros</Button>
                </div>
            </div>
            <div className={styles.container_cards}>
                {arrFuncionarios.map(item => <CardFuncionario funcionario={item} />)}
            </div>

            <div className={styles.question}>
                <h5>A estapa está concluída?</h5>
                <Switch checkedChildren="Sim" unCheckedChildren="Não" defaultChecked  />
            </div>
            <div className={styles.question}>
                <button className={styles.buttonSucess}>Próximo passo</button>
            </div>



        </div>


    )
}