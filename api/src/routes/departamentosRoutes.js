import con from '../services/conection.js'

const departamentosRoutes = (app) => {
  app.get('/api/departamentos', async (req, res) => {
    const [rows] = await con.query('SELECT * FROM DEPARTAMENTOS')
    res.json(rows)
  })

  app.post('/api/departamentos', async (req, res) => {
    const sigla = 'JUR'
    const nome = 'Depto. Juridico'

    try {
      // Executa a consulta de inserção no banco de dados
      const [result] = await con.query('INSERT INTO DEPARTAMENTOS (sigla, nome) VALUES (?, ?)', [sigla, nome])
      
      // Verifica se a inserção foi bem-sucedida
      if (result.affectedRows === 1) {
        res.status(201).json('Departamento adicionado com sucesso!')
      } else {
        res.status(500).json('Erro ao adicionar departamento.')
      }
    } catch (e) {
      console.error(`[ERROR] ${e}`)
      res.status(500).json('Erro ao adicionar departamento.')
    }
  })

}

export default departamentosRoutes