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