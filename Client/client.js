#!/usr/bin/env node
const program = require('commander')
var express = require('express');
var axios = require('axios')

var cli = express();
var http = "http://localhost:3000/"

// Configuration des paramètres attendus
program
    .version('1.0.0')
    .option('-c, --create', 'Create a new note')
    .option('-l, --list', 'List all notes')
    .option('-x, --delete [id]', 'Delete note by id')
    .option('-p, --priority [priority]', 'Define importance of the note')
    .option('-t, --content [content]', 'write your note here')
    .option('-s, --stopDate [date]', 'Define an expiration date')
    .option('-n, --name [name]', 'define the name of the note')

// On parse (convertit en format utilisable) les options
// fonction synchrone
program
    .parse(process.argv)

// Maintenant on peut les utiliser
if (program.create) {
    console.log('Create note !')
    var post = {"name" : `${program.name}`,
                "content" : `${program.content}`,
                "priority" : `${program.priority}`,
                "expiration_date" : `${program.stopDate}`};
    if (program.name && program.content) {
        axios.post(http + post);
    }

    else {
        console.log("vous n'avez pas défini name ou content.");
        console.log("Voir client -h pour l'aide");
    }
}

else if (program.list) {
    console.log('List!')
}

else if (program.delete) {
    console.log(`deleted note ${program.delete}!`)
}

else
    {program.help()
}
