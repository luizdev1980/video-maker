const readline = require('readline-sync')
const state = require('./state.js')

function robot() {
  const content = {
    maximumSentences: 7
  }

  content.searchTerm = asyncAndReturnSearchTerm()
  content.prefix = asyncAndReturnPrefix()
  state.save(content)

  function asyncAndReturnSearchTerm() {
    return readline.question('Digite um termo para pesquinsarmos na Wikipedia: ')
  }

  function asyncAndReturnPrefix() {
    const prefixes = ['Quem e?', 'O que e?', 'A historia de']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma das opcoes: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]

    return selectedPrefixText
  }

}

module.exports = robot