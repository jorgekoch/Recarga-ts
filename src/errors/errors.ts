export function samenumberError(entity: string) {
    return {
        type: "sameNameError",
        message: `Um ${entity} igual já existe`,
    }
}