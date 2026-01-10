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
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className= {styles.graphItem}>
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
                      fontSize: 12,
                      fill: '#333'
                  }
              }}
          />
        ) : (
          <p style={{textAlign: 'center', color: '#666'}}>Sem dados para o gráfico</p>
        )}
      </div>
      <div className= {styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph} />
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatisticsGraphs
