import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  render() {
    const { users, sortedIds } = this.props
    return (
      <article className='leaders'>
        {sortedIds.map((user)=>(
          <section key={user}>
            <h1 className='compl-accent-text'>{users[user].name}</h1>
            <div className='flex-container'>
              <img src={users[user].avatarURL} alt={users[user].name}/>
              <div>
                <p>Answered questions:
                  <strong> {Object.keys(users[user].answers).length}</strong>
                </p>
                <p>Created questions:
                  <strong> {users[user].questions.length}</strong>
                </p>
              </div>
            </div>
          </section>
        ))}
      </article>
    )
  }
}

function mapStateToProps ({users}) {
   //https://stackoverflow.com/questions/37982476/how-to-sort-a-map-by-value-in-javascript
   //sort first alphabetically and then by values
   function sortMapByValue(myMap) {
     myMap[Symbol.iterator] = function* () {
       yield* [...this.entries()].sort().sort((a, b) => b[1] - a[1]);
     }
   }

   function storeKeys (myArray, myMap) {
     for (let [key] of myMap) {
       myArray.push(key)
     }
   }

   let sumMap = new Map()
   let sortedIds = []

   //populate map
   Object.keys(users).map((user)=>{
     return sumMap.set(user, (Object.keys(users[user].answers).length)
                      + (Object.keys(users[user].questions).length))
   })

   sortMapByValue(sumMap)
   storeKeys(sortedIds, sumMap)

   return {
     users,
     sortedIds
  }
}

export default connect(mapStateToProps)(LeaderBoard)
