import './assets/css/style.css';

import {Validador} from './modules/validadorcpf'
import { GeradorCPF } from './modules/geradorcpf'
import { ControllerManager } from './modules/contentcontroller';
const validador = new Validador();
const controller = new ControllerManager();
