const router = require("express").Router();
const { notes } = require("../../db/db.json");
const { findById, createNewNote, removeNote } = require("../../lib/notes");
const uuid = require("uuid");
