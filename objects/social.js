/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Impliment following functions for given socials data:

Instruction
Implement a function biggestFollower() which returns the name
of the individual who follows the most people.

Instruction
Implement mostPopular() which returns the name of the most
popular (most followed) individual.

Instruction
Implement printAll() which outputs a list of everyone and
for each of them, the names of who they follow and who follows them.

Instruction
Implement unrequitedFollowers() which returns a list of
names for those who follow someone that doesn't follow them back.

Instruction
Implement some or all these remaining functions.

---- maybe someday
Identify who has the most followers over 30
Identify who follows the most people over 30
List everyone and their reach (sum of # of followers and # of
  followers of followers)

--------------------------------
data reference :
  data = {
    f01: {
      name: "Alice",
      age: 15,
      follows: ["f02", "f03", "f04"]
    },
*/

/**
 * biggestFollower(data) - returns the name of the individual
 * who follows the most people.
 *
 * @param {object} data - nested objects
 * @return {string}
*/
const biggestFollower = function(data) {
  let bigFollows = '';
  let most = 0;
  for (let follower in data) {
    if (data[follower]['follows'].length > most) {
      most = data[follower]['follows'].length;
      bigFollows = data[follower]['name'];
    }
  }
  return bigFollows;
}

/**
 * mostPopular() which returns the name of the most popular
 * (most followed) individual.
 *
 * @param {object} data - nested objects
 * @return {string}
*/
const mostPopular = function(data) {
  let bigFollowingID = '';
  let most = 0;
  const numberFollowing = numbersFollowingObj(data);


  for (let userID in numberFollowing) {
    if (numberFollowing[userID] > most) {
      most = numberFollowing[userID];
      bigFollowingID = userID;
    }
  }
  //console.log(numOFollows);
  return data[bigFollowingID]['name'];
}

/**
 * numbersFollowingObj(data) takes obj of user data, creates new object
 * arranging users with # of followers
 *
 * used by mostPopular(data)
 *
 * @param {object} data - nested objects
 * @return {object} - nested object
 *    userName : {followers: [usernames,..], followering: [usernames,..]}
*/
const numbersFollowingObj = function(data) {
  let numOFollows = {};

  for (let follower in data) {
    for (let individual of data[follower]['follows']) {
      if (Object.prototype.hasOwnProperty.call(numOFollows, individual)) {
        numOFollows[individual] += 1;
      } else {
        numOFollows[individual] = 1;
      }
    }
  }
  return numOFollows;
}

/**
 * printAll() which outputs a list of everyone and for each of them,
 * the names of who they follow and who follows them.
 *
 * uses userNameObj(data) to organize data
 *
 *
 * @param {object} data - nested objects
 * @return {object}
*/
const printAll = function(data) {
  let objForPrint = userNameObj(data);
  let final = '';

  for (let individual in objForPrint) {
    final += individual + '\n';
    final += '\t\tFollowers: ' + (objForPrint[individual]['followers'].join(', ')) + '\n';
    final += '\t\tFollowing: ' + (objForPrint[individual]['following'].join(', ')) + '\n';
  }
  return final;
}

/**
 * userNameObj(data) takes obj of user data, creates new nested object
 * organizing follwers and follwing by names
 *
 * used by printAll(data)
 *
 * @param {object} data - nested objects
 * @return {object} - nested object
 *    userName : {followers: [usernames,..], followering: [usernames,..]}
*/
const userNameObj = function(data) {
  let listOFollows = {};

  for (let fKey in data) {
    // update following value. add new people to list if needed
    if (Object.prototype.hasOwnProperty.call(listOFollows, data[fKey]['name'])) {
      //test log //console.log(data[fKey]['name'],' exists, updating following w:', getFollowing(data, data[fKey]['follows']));
      listOFollows[data[fKey]['name']]['following'] = getFollowing(data, data[fKey]['follows']);
    } else {
      //test log //console.log(data[fKey]['name'],' new add, add following w: ', getFollowing(data, data[fKey]['follows']));
      listOFollows[data[fKey]['name']] = {
        followers : [],
        following : getFollowing(data, data[fKey]['follows'])
      };
    }

    // update followers value. add new people to list if needed
    for (let follower of data[fKey]['follows']) {
      if (Object.prototype.hasOwnProperty.call(listOFollows, data[follower]['name'])) {
        //test log //console.log(data[follower]['name'],' exists, updating followers w:', data[fKey]['name']);
        listOFollows[data[follower]['name']]['followers'].push(data[fKey]['name']);
      } else {
        //test log //console.log(data[follower]['name'],' new add, add to followers w:', data[fKey]['name']);
        listOFollows[data[follower]['name']] = {
          followers : [data[fKey]['name']],
          following : []
        };
      }
    }
  }
  return listOFollows;
}

/**
 * getFollowing(data, array) takes array of user numbers and returns
 * array of user names
 *
 * used by userNameObj()
 *
 * @param {object} data - nested objects
 * @param {array} array - array of user numbers
 * @return {array} - array of user names
*/
const getFollowing = function(data, array) {
  let followingList = [];
  for (let follower of array) {
    followingList.push(data[follower]['name']);
  }
  return followingList;
}

/**
 * unrequitedFollowers() which returns a list of names for those who
 * follow someone that doesn't follow them back.
 *
 * contains string (moreInfo) in order to print more detailed list
 *
 * @param {object} data - nested objects
 * @return {string}
*/
const unrequitedFollowers = function(data) {
  let theWorstType = [];
  let moreInfo = ''

  for (let fKey in data) {
    for (let individual of data[fKey]['follows']) {
      if (!data[individual]['follows'].includes(fKey)) {
        if (!theWorstType.includes(data[individual]['name'])) {
          theWorstType.push(data[individual]['name']);
        }
        moreInfo += data[individual]['name'] + ' doesn\'t follow ' +
          data[fKey]['name'] + ' back\n';
      }
    }
  }
  console.log(moreInfo);
  return theWorstType;
}

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04", "f06"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//TEST
console.log('Biggest Follower: ', biggestFollower(data));
console.log('Most Popular: ', mostPopular(data));
console.log('Print: ', printAll(data));
console.log('List of unrequited followers: ', unrequitedFollowers(data));