import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor} from "./Funcionarios/Diretor.js"
import { sistemaAutenticacao } from "./sistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123")

const cliente = new Cliente("lais", 78945612379, "456")
const diretorEstaLogado = sistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = sistemaAutenticacao.login(gerente, "123456");

const clienteEstaLogado = sistemaAutenticacao.login(cliente, "456")