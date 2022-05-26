/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
  // Create Adjacency list for each account email
  // Loop through each account's first account email
  // If visited, that mean the account is being merged
  // Else go DFS for all adjacent account email until all visited

  const visited = new Map();
  const adjacencyList = new Map();
  const results = [];

  function dfs(mergedAccount, accountEmail) {
    visited.set(accountEmail, true);
    mergedAccount.push(accountEmail);

    adjacencyList.get(accountEmail).forEach((neigbour) => {
      if (!visited.get(neigbour)) {
        dfs(mergedAccount, neigbour);
      }
    });
  }

  accounts.forEach((account) => {
    const firstAccountEmail = account[1];

    let existingList = adjacencyList.get(firstAccountEmail);

    if (!existingList) {
      existingList = [];
      adjacencyList.set(firstAccountEmail, existingList);
    }

    for (let i = 2; i < account.length; i++) {
      const accountEmail = account[i];

      if (accountEmail === firstAccountEmail) {
        continue;
      }

      existingList.push(accountEmail);

      if (!adjacencyList.get(accountEmail)) {
        adjacencyList.set(accountEmail, [firstAccountEmail]);
      } else {
        adjacencyList.get(accountEmail).push(firstAccountEmail);
      }
    }
  });

  accounts.forEach((account) => {
    const firstEmail = account[1];

    // email is component of another account
    if (visited.get(firstEmail)) {
      return;
    }

    const mergedAccount = [account[0]];

    dfs(mergedAccount, firstEmail);

    mergedAccount.sort((a, b) => {
      if (a === account[0]) {
        return -1;
      }

      if (b === account[0]) {
        return 1;
      }

      return a > b ? 1 : -1;
    });

    results.push(mergedAccount);
  });

  return results;
}

console.log(
  accountsMerge([
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['Mary', 'mary@mail.com'],
    ['John', 'johnnybravo@mail.com'],
  ]),
);
console.log(
  accountsMerge([
    ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
    ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
    ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
    ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
    ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co'],
  ]),
);
console.log(
  accountsMerge([
    ['David', 'David0@m.co', 'David4@m.co', 'David3@m.co'],
    ['David', 'David5@m.co', 'David5@m.co', 'David0@m.co'],
    ['David', 'David1@m.co', 'David4@m.co', 'David0@m.co'],
    ['David', 'David0@m.co', 'David1@m.co', 'David3@m.co'],
    ['David', 'David4@m.co', 'David1@m.co', 'David3@m.co'],
  ]),
);
