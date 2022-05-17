import React from 'react'
import Spinner from 'part:@sanity/components/loading/spinner'
import Preview from 'part:@sanity/base/preview'
import schema from 'part:@sanity/base/schema'
import styles from '../styles/index.css'
import { DocOrderSortCard } from './DocOrderSortCard'

class DocOrderSortDraggableSection extends React.Component {
  render() {
    const { documents, count, type, moveCard, getDocuments } = this.props

    if (!(type && type.value) && !documents.length) {
      return null
    }

    if (type && type.value && !documents.length) {
      return (
        <div className={styles.marginTop}>
          <Spinner message="Loading..." center />
        </div>
      )
    }

    const hasReachedEnd = documents.length === count

    return (
      <>
        <ul className={styles.list}>
          {documents.map((document, index) => (
            <li key={document._id} className={styles.listItem}>
              <DocOrderSortCard
                key={document._id}
                index={index}
                id={document._id}
                text={document.title}
                moveCard={moveCard}
                jsx={
                  <Preview value={document} type={schema.get(document._type)} />
                }
              />
            </li>
          ))}
        </ul>
        {hasReachedEnd ? null : (
          <div className={styles.buttonWrapper}>
            <button onClick={getDocuments}>Load More</button>
          </div>
        )}
      </>
    )
  }
}

export default DocOrderSortDraggableSection
