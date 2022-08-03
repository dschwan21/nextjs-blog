

export default function handler(req, res) {
    console.log('here is the req', req)
    res.status(200).json({ text: 'sup' });
  }