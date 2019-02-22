'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.incidentsPOST = function incidentsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.incidentsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.incidentsSticker_uuidGET = function incidentsSticker_uuidGET (req, res, next) {
  var sticker_uuid = req.swagger.params['sticker_uuid'].value;
  Default.incidentsSticker_uuidGET(sticker_uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.responsesPOST = function responsesPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.responsesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.responsesSticker_uuidGET = function responsesSticker_uuidGET (req, res, next) {
  var sticker_uuid = req.swagger.params['sticker_uuid'].value;
  Default.responsesSticker_uuidGET(sticker_uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stickersPOST = function stickersPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.stickersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
