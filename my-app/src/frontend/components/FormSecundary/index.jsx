import React from 'react';
import styles from './styles.module.css'
import { Switch, } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import ServicosUsuarios from "../../../backend/services"
const { v4: uuidv4 } = require('uuid');
export default function FormSecundary({ alterForm }) {
    const [formValues, setFormValues] = useState({
        id: uuidv4(),
        nome: '',
        cpf: '',
        rg: '',
        sexo: '',
        dataNascimento: '',
        cargo: '',
        atividade: '',
        epi: '',
        numeroCA: '',
        arquivo: null,
        ativo: true
    });
    const [nameArquivo, setNameArquivo] = useState(null)

    const handleSwitchChange = (checked) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            ativo: checked,
        }));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormValues((prevValues) => ({
            ...prevValues,
            arquivo: file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formValues)
            const servicosUsuarios = new ServicosUsuarios();
            const usuarios = await servicosUsuarios.cadastrarUsuario(formValues);
            console.log(usuarios)
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }

    };



    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.headerSecundary}>
                <img src="/assets/setinha2.svg" width={30} height={30} alt="Setinha" onClick={alterForm} />
                <h1>Adicionar Funcionário</h1>
            </div>

            <div className={styles.containerSwitch}>
                <h1>O trabalhador está ativo ou inativo?</h1>
                <Switch checkedChildren="Ativo" unCheckedChildren="Inativo" defaultChecked onChange={handleSwitchChange} />
            </div>

            <div className={styles.formcontainer}>
                <div className={styles.formcolumn}>
                    <div className={styles.formgroup}>
                        <label htmlFor="nome" className={styles.labels}>Nome:</label>
                        <input type="text" id="nome" name="nome" onChange={handleChange} />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="cpf" className={styles.labels}>CPF:</label>
                        <input type="text" id="cpf" name="cpf" onChange={handleChange} />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="rg" className={styles.labels}>RG:</label>
                        <input type="text" id="rg" name="rg" onChange={handleChange} />
                    </div>
                </div>

                <div className={styles.formcolumn}>
                    <div className={styles.formgroup}>
                        <label className={styles.labels}>Gênero:</label>
                        <div className={styles.radiogroup}>
                            <label htmlFor="masculino" className={styles.labels}>
                                <input type="radio" id="masculino" name="sexo" value="masculino" onChange={handleChange} />
                                Masculino
                            </label>
                            <label htmlFor="feminino" className={styles.labels}>
                                <input type="radio" id="feminino" name="sexo" value="feminino" onChange={handleChange} />
                                Feminino
                            </label>
                        </div>
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="data-nascimento" className={styles.labels}>Data de Nascimento:</label>
                        <input type="date" id="data-nascimento" name="dataNascimento" onChange={handleChange} />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="cargo" className={styles.labels}>Cargo:</label>
                        <select id="cargo" name="cargo" className={styles.selectoptions}
                            onChange={handleChange}>
                            <option value="atv01">Atividade 01</option>
                            <option value="atv02">Atividade 02</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.formcontainer2}>
                <h2>Quais EPIs o trabalhador usa na atividade?</h2>
                <div className={styles.formgroup}>
                    <label htmlFor="sem-epi" className={styles.checkboxlabel}>
                        O trabalhador não usa EPIs
                        <input type="checkbox" id="sem-epi" name="sem-epi" className={styles.checkboxinput} onChange={handleChange} />
                    </label>
                </div>

                <div className={styles.formColumn2}>
                    <div className={styles.formgroup}>
                        <label htmlFor="epi" className={styles.labels}>Selecione Atividade:</label>
                        <select id="epi" name="atividade" className={styles.selectoptions} onChange={handleChange}>
                            <option value="epi1">Atv1</option>
                            <option value="epi2">Atv2</option>
                        </select>
                    </div>

                    <div className={styles.center}>
                        <div className={styles.formgroup}>
                            <label htmlFor="epi" className={styles.labels}>Selecione o EPI:</label>
                            <select id="epi" name="epi" className={styles.selectoptions} onChange={handleChange}>
                                <option value="epi1">EPI 1</option>
                                <option value="epi2">EPI 2</option>
                                <option value="epi3">EPI 3</option>
                            </select>
                        </div>

                        <div className={styles.formgroup}>
                            <label htmlFor="ca" className={styles.labels}>Informe o número do CA:</label>
                            <input type="number" id="ca" name="numeroCA" onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <button className={styles.buttonAdc}>Adicionar outra atividade</button>
            </div>

            <div className={styles.formcontainer2}>
                <div className={styles.fileinputcontainer}>
                    <h4><strong>Adicione Atestado de Saúde Ocupacional (opcional):</strong></h4>
                    <div className={styles.containerz}><span>{formValues.arquivo == null ? "Nenhum arquivo selecionado" : `${formValues.arquivo.name}`}</span></div>
                    <input
                        type="file"
                        id="arquivo"
                        name="arquivo"
                        className={styles.fileinput}
                        onChange={handleFileChange}
                    />
                    <label htmlFor="arquivo" className={styles.buttonAdc}>Selecionar Arquivo</label>
                </div>
            </div>

            <button type="submit" className={styles.buttonAdc}>Salvar</button>
        </form>
    );
}
