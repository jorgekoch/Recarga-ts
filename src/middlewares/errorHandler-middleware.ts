export default function errorHandler({ error, req, res, next }) {

    if (error.type === 'sameNameError') {
    return res.status(409).send(error.message);
    }

    if (error.type === 'phoneLimitError') {
        return res.status(409).send(error.message);
    }



    res.status(500).send(error.message);
}