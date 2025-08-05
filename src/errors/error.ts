export function sameNumberError(entity: string) {
    return {
        type: "sameNameError",
        message: `Um ${entity} igual já existe`,
    }
}

export function phoneLimitError(entity: string) {
    return {
        type: "phoneLimitError",
        message: `Não é permitido cadastrar mais que 3 ${entity}s.`,
    }
}

export function notFoundError(entity: string) {
    return {
        type: "notFoundError",
        message: `${entity} não encontrado`,
    }
}

export function rechargeError() {
    return {
        type: "rechargeError",
        message: `O valor da recarga deve ser maior que 10 e menor que 1000 reais`,
    }
}