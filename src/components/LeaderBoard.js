import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  render() {
    const { users, usersIds,sum, sortedIds } = this.props
    return (
      <div>
        {sortedIds.map((user)=>(
          <div key={user}>
            <p>{users[user].name}</p>
            <img src={users[user].avatarURL}/>
            <p>Answered questions: {Object.keys(users[user].answers).length}</p>
            <p>Created questions: {users[user].questions.length}</p>
          </div>
        )) }
      </div>
    )
  }
}

function mapStateToProps ({users}) {
   //maybe better to have array with two values, something like tuples...

   //https://stackoverflow.com/questions/37982476/how-to-sort-a-map-by-value-in-javascript
   //sort first alphabetically and then by values
   function sortMapByValue(myMap) {
     myMap[Symbol.iterator] = function* () {
       yield* [...this.entries()].sort().sort((a, b) => b[1] - a[1]);
     }
   }

   function storeKeys (myArray, myMap) {
     for (let [key, value] of myMap) {
       myArray.push(key)
     }
   }

   let sumMap = new Map()
   let sortedIds = []

   //populate map
   Object.keys(users).map((user)=>{
     sumMap.set(user, (Object.keys(users[user].answers).length)
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
