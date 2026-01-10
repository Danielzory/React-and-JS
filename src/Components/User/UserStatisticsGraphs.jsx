import React from 'react'
import styles from './UserStatisticsGraphs.module.css'
import {VictoryPie, VictoryChart, VictoryBar} from 'victory'

const UserStatisticsGraphs = ({data}) => {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        if (!data || !Array.isArray(data)) {
            setGraph([]);
            setTotal(0);
            return;
        }

        const graphData = data.map(item => {
            const acessValue = Number(item.acess ?? item.acessos ?? 0);
            return {
                x: item.title || '—',
                y: isNaN(acessValue) ? 0 : acessValue,
            }
        })
        setGraph(graphData)

        setTotal(
            graphData.reduce((acc, cur) => acc + (cur.y || 0), 0)
        )
    }, [data])

  return (
<<<<<<< HEAD
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className= {styles.graphItem}>
=======
    <section className={`${styles.graphSection} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
      <div>
>>>>>>> 803339cdddeb0dc7464e6d401b0e70460e0ecb94
        {graph.length ? (
          <VictoryPie 
              data={graph}
              innerRadius={60}
              padding={{top: 20, bottom: 20, left: 80, right: 80}}
              style={{
                  data: {
                      fillOpacity: .9,
                      stroke: '#fff',
                      strokeWidth: 2,
                  },
                  labels: {
<<<<<<< HEAD
                      fontSize: 12,
=======
                      fontSize: 14,
>>>>>>> 803339cdddeb0dc7464e6d401b0e70460e0ecb94
                      fill: '#333'
                  }
              }}
          />
        ) : (
          <p style={{textAlign: 'center', color: '#666'}}>Sem dados para o gráfico</p>
        )}
      </div>
<<<<<<< HEAD
      <div className= {styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph} />
        </VictoryChart>
      </div>
=======
>>>>>>> 803339cdddeb0dc7464e6d401b0e70460e0ecb94
    </section>
  )
}

export default UserStatisticsGraphs
