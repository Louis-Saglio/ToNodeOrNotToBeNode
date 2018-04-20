#!/usr/bin/env node
const program = require('commander')
var express = require('express');
var toto;

var cli = express();

// Configuration des paramètres attendus
program
    .version('1.0.0')
    .option('-c, --create', 'Create a new note')
    .option('-l, --list', 'List all notes')
    .option('-e, --edit [id]', 'edit note by id')
    .option('-x, --delete [id]', 'Delete note by id')
    .option('-p, --priority [priority]', 'Delete note by id')
    .option('-t, --content [content]', 'Delete note by id')
    .option('-s, --stop-date [date]', 'Delete note by id')
    .option('-d, --is-done [bool]', 'Delete note by id')
    .option('-n, --name [name]', 'Delete note by id')

// On parse (convertit en format utilisable) les options
// fonction synchrone
program
    .parse(process.argv)

// Maintenant on peut les utiliser
if (program.create) {
    console.log('Create note !')
    if (program.name) {
        console.log(`name ${program.name}!`)
    }
    else if (program.priority) {
        console.log(`priority ${program.priority}!`)
    }
    else if (program.content) {
        console.log(`content ${program.content}!`)
    }
    else if (program.stop-date) {
        console.log(`stop date ${program.stop-date}!`)
    }
    else if (program.is-done) {
        console.log(`is done ${program.is-done}!`)
    }
}
else if (program.list) {
    console.log('List!')
}
else if (program.edit) {
    console.log(`edit note ${program.edit}!`)
    if (program.name) {
        console.log(`name ${program.name}!`)
    }
    else if (program.priority) {
        console.log(`priority ${program.priority}!`)
    }
    else if (program.content) {
        console.log(`content ${program.content}!`)
    }
    else if (program.stop-date) {
        console.log(`stop date ${program.stop-date}!`)
    }
    else if (program.is-done) {
        console.log(`is done ${program.is-done}!`)
    }
}
else if (program.delete) {
    console.log(`deleted note ${program.delete}!`)
}
else if (program.name) {
    console.log(`name ${program.delete}!`)
}
else if (program.priority) {
    console.log(`priority ${program.delete}!`)
}
else if (program.content) {
    console.log(`content ${program.delete}!`)
}
else if (program.stop-date) {
    console.log(`stop date ${program.delete}!`)
}
else if (program.is-done) {
    console.log(`is done ${program.delete}!`)
}
else
    {program.help()
}
