import React from "react"
import Layout from "../components/layout"
import { graphql, Link, StaticQuery } from 'gatsby'

const getImageData = (graphql`
{
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }      
`)

export default () => (
    <Layout>
        <h3>Image File Data</h3>
        <StaticQuery
            query={getImageData}
            render={data => (
                <table>
                    <thead>
                    <tr>
                        <th>Relative Path</th>
                        <th>Size</th>
                        <th>Extension</th>
                        <th>Birthday</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({node}, index) => ( // deconstruct edge object
                            <tr key={index}>
                                <td>{node.relativePath}</td>
                                <td>{node.size}</td>
                                <td>{node.extension}</td>
                                <td>{node.birthTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        />
        <h1>Hello from Page 3!</h1>
        <Link to="/page-2">Go to page 2</Link>
    </Layout>
)