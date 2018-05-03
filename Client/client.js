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
    .option('-p, --priority [priority]', 'Define importance of the note')
    .option('-t, --content [content]', 'write your note here')
    .option('-s, --stopDate [date]', 'Define an expiration date')
    .option('-d, --isDone [bool]', 'define is task is done or not')
    .option('-n, --name [name]', 'define the name of the note')

// On parse (convertit en format utilisable) les options
// fonction synchrone
program
    .parse(process.argv)

// Maintenant on peut les utiliser
if (program.create) {
    console.log('Create note !')
    if (program.name && program.content) {
        console.log(`name ${program.name}!`)
        console.log(`content ${program.content}!`)
    }
    if (program.priority) {
        console.log(`priority ${program.priority}!`)
    }
    /*if (program.content) {
        console.log(`content ${program.content}!`)
    }*/
    if (program.stopDate) {
        console.log(`stop date ${program.stopDate}!`)
    }
    if (program.isDone) {
        console.log(`is done ${program.isDone}!`)
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
    if (program.priority) {
        console.log(`priority ${program.priority}!`)
    }
    if (program.content) {
        console.log(`content ${program.content}!`)
    }
    if (program.stopDate) {
        console.log(`stop date ${program.stopDate}!`)
    }
    if (program.isDone) {
        console.log(`is done ${program.isDone}!`)
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
