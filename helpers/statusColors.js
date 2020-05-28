import { DOUBLE_COLONIAL_WHITE, SHILO, ALGAE_GREEN } from '../config/colors';


export function statusColor(status) {
    if (status === 'missing_information') return { color: DOUBLE_COLONIAL_WHITE, text: 'Falta Informação' };
    if (status === 'not_sent') return { color: SHILO, text: 'Não Enviado' };
    if (status === 'sent') return { color: ALGAE_GREEN, text: 'Enviado' };
}