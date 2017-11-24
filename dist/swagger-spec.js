var swaggerSpec = 
{
  "swagger" : "2.0",
  "info" : {
    "version" : "1.0.4",
    "title" : "Syscoin API"
  },
  "host" : "localhost:8001",
  "tags" : [ {
    "name" : "General",
    "description" : "All general wallet operations."
  }, {
    "name" : "Aliases",
    "description" : "Operations related to aliases."
  }, {
    "name" : "Offers",
    "description" : "Operations related to offers and the decentralized marketplace functionality."
  }, {
    "name" : "Escrow",
    "description" : "Operations related to escrow."
  }, {
    "name" : "Certificates",
    "description" : "Operations related to digital certificates."
  } ],
  "schemes" : [ "http", "https" ],
  "consumes" : [ "application/json" ],
  "produces" : [ "application/json" ],
  "paths" : {
    "/login" : {
      "get" : {
        "tags" : [ "Blockmarket" ],
        "description" : "Returns a session token for use with subsquent protected calls.",
        "operationId" : "login",
        "parameters" : [ {
          "name" : "auth",
          "in" : "query",
          "description" : "SHA1 hash of the user's authentication information- usernamepassword.",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/LoginResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        }
      },
      "x-swagger-router-controller" : "blockmarket"
    },
    "/storedata" : {
      "post" : {
        "tags" : [ "Blockmarket" ],
        "description" : "Store an arbitrary piece of data on a decentralized network of data storage warehouses and return the client an array of URLs through which the data can be accessed.",
        "operationId" : "storedata",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/StoreDataRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/StoreDataResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "blockmarket"
    },
    "/getblock" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "If verbose is false, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is true, returns an Object with information about block <hash>.",
        "operationId" : "getblock",
        "parameters" : [ {
          "name" : "hash",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "verbose",
          "in" : "query",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/GetBlockResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getblockchaininfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns an object containing various state info regarding block chain processing.",
        "operationId" : "getblockchaininfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/GetBlockchainInfoResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getblockcount" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns the number of blocks in the longest block chain.",
        "operationId" : "getblockcount",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "type" : "number"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getinfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns an object containing various state info.",
        "operationId" : "getinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Info"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getmininginfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns a json object containing mining-related information.",
        "operationId" : "getmininginfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/MiningInfo"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getnetworkinfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns a json object containing network-related information.",
        "operationId" : "getnetworkinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/NetworkInfo"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getpeerinfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns data about each connected network node as a json array of objects.",
        "operationId" : "getpeerinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/PeerInfoResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/validateaddress" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Return information about the given syscoin address.",
        "operationId" : "validateaddress",
        "parameters" : [ {
          "name" : "syscoinaddress",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/ValidateAddressResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/verifymessage" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Verify a signed message",
        "operationId" : "verifymessage",
        "parameters" : [ {
          "name" : "syscoinaddress",
          "in" : "query",
          "description" : "The syscoin address to use for the signature.",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "signature",
          "in" : "query",
          "description" : "The signature provided by the signer in base 64 encoding (see signmessage).",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "message",
          "in" : "query",
          "description" : "The message that was signed.",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "If the signature is verified or not.",
            "schema" : {
              "type" : "boolean"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/addmultisigaddress" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Add a nrequired-to-sign multisignature address to the wallet. Each key is a Syscoin address or hex-encoded public key. If 'account' is specified (DEPRECATED), assign address to that account.",
        "operationId" : "addmultisigaddress",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AddMultisigAddressRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "A syscoin address associated with the keys.",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasaddscript" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Add redeemscript to local wallet for signing smart contract based alias transactions.",
        "operationId" : "aliasaddscript",
        "parameters" : [ {
          "name" : "redeemscript",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "object",
              "properties" : { }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasfilter" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "scan and filter aliases",
        "operationId" : "aliasfilter",
        "parameters" : [ {
          "name" : "query",
          "in" : "query",
          "description" : "Generic filter query to pass into syscoinquery",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/AliasIndex"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliashistory" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "List all stored values of an alias.",
        "operationId" : "aliashistory",
        "parameters" : [ {
          "name" : "query",
          "in" : "query",
          "description" : "Generic filter query to pass into syscoinquery",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/AliasHistoryIndex"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliastxhistory" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "List all stored transactions related to an alias.",
        "operationId" : "aliastxhistory",
        "parameters" : [ {
          "name" : "query",
          "in" : "query",
          "description" : "Generic filter query to pass into syscoinquery",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/AliasTxHistoryIndex"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasupdatewhitelist" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Update to the whitelist(controls who can resell). Array of whitelist entries in parameter 1.",
        "operationId" : "aliasupdatewhitelist",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AliasUpdateWhitelistRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasclearwhitelist" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Clear your whitelist(controls who can resell).",
        "operationId" : "aliasclearwhitelist",
        "parameters" : [ {
          "name" : "owneralias",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "witness",
          "in" : "query",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "object",
              "properties" : { }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliaswhitelist" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "List all affiliates for this alias.",
        "operationId" : "aliaswhitelist",
        "parameters" : [ {
          "name" : "alias",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "witness",
          "in" : "query",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/WhitelistEntry"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasbalance" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "Returns the total amount received by the given alias in transactions with at least 1 confirmation.",
        "operationId" : "aliasbalance",
        "parameters" : [ {
          "name" : "alias",
          "in" : "query",
          "description" : "The syscoin alias to get balance for",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "object",
              "properties" : { }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasinfo" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "Show values of an alias.",
        "operationId" : "aliasinfo",
        "parameters" : [ {
          "name" : "aliasname",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Alias"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasnew" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Creates a new Syscoin Alias. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "aliasnew",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AliasNewRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliaspay" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Send multiple times from an alias. Amounts are double-precision floating point numbers.",
        "operationId" : "aliaspay",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AliasPayRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliasupdate" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Update and possibly transfer an alias. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "aliasupdate",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AliasUpdateRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/syscoinsendrawtransaction" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Signed raw transaction (serialized, hex-encoded) sent out to the network.",
        "operationId" : "syscoinsendrawtransaction",
        "parameters" : [ {
          "in" : "body",
          "name" : "hexstring",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SendRawTransactionRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/syscoindecoderawtransaction" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN).",
        "operationId" : "syscoindecoderawtransaction",
        "parameters" : [ {
          "in" : "body",
          "name" : "hexstring",
          "required" : true,
          "schema" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "object",
              "properties" : { }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/syscoinquery" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "Query the indexer for information in a collection.",
        "operationId" : "syscoinquery",
        "parameters" : [ {
          "name" : "collection",
          "in" : "query",
          "description" : "Collection name, either \\\"alias\\\", \\\"aliashistory\\\", \\\"aliastxhistory\\\", \\\"cert\\\",  \\\"certhistory\\\", \\\"offer\\\", \\\"offerhistory\\\", \\\"feedback\\\", \\\"escrow\\\", \\\"escrowbid\\\"",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "query",
          "in" : "query",
          "description" : "JSON query on the collection to retrieve a set of documents",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "options",
          "in" : "query",
          "description" : "JSON option arguments into the query. Based on mongoc_collection_find_with_opts.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/prunesyscoinservices" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Clean expired Syscoin services from indexer and internal database.",
        "operationId" : "prunesyscoinservices",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "object",
              "properties" : { }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certinfo" : {
      "get" : {
        "tags" : [ "Certificates" ],
        "description" : "Show stored values of a single certificate.",
        "operationId" : "certinfo",
        "parameters" : [ {
          "name" : "guid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Cert"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certfilter" : {
      "get" : {
        "tags" : [ "Certificates" ],
        "description" : "scan and filter certs",
        "operationId" : "certfilter",
        "parameters" : [ {
          "name" : "query",
          "in" : "query",
          "description" : "Generic filter query to pass into syscoinquery",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/CertIndex"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certhistory" : {
      "get" : {
        "tags" : [ "Certificates" ],
        "description" : "List all stored values of an cert.",
        "operationId" : "certhistory",
        "parameters" : [ {
          "name" : "query",
          "in" : "query",
          "description" : "Generic filter query to pass into syscoinquery",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/CertHistoryIndex"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certnew" : {
      "post" : {
        "tags" : [ "Certificates" ],
        "description" : "Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "certnew",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/CertNewRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certtransfer" : {
      "post" : {
        "tags" : [ "Certificates" ],
        "description" : "Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "certtransfer",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/CertTransferRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/certupdate" : {
      "post" : {
        "tags" : [ "Certificates" ],
        "description" : "Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "certupdate",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/CertUpdateRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/dumpprivkey" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Reveals the private key corresponding to 'syscoinaddress'. Then the importprivkey can be used with this output.",
        "operationId" : "dumpprivkey",
        "parameters" : [ {
          "name" : "address",
          "in" : "query",
          "description" : "The syscoin address for the private key",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/dumpwallet" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Dumps all wallet keys in a human-readable format.",
        "operationId" : "dumpwallet",
        "parameters" : [ {
          "name" : "filename",
          "in" : "query",
          "description" : "The filename",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/encryptwallet" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Encrypts the wallet with 'passphrase'. This is for first time encryption. After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior the making these calls. Use the walletpassphrase call for this, and then walletlock call. If the wallet is already encrypted, use the walletpassphrasechange call. Note that this will shutdown the server.",
        "operationId" : "encryptwallet",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EncryptWalletRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowacknowledge" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Acknowledge escrow payment as seller of offer. Deducts qty of offer and increases number of sold inventory.",
        "operationId" : "escrowacknowledge",
        "parameters" : [ {
          "name" : "escrowguid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "witness",
          "in" : "query",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowcreaterawtransaction" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Creates raw transaction for escrow refund or release, sign the output raw transaction and pass it via the rawtx parameter to escrowrelease. Type is 'refund' or 'release'. Third parameter is array of input (txid, vout, amount) pairs to be used to fund escrow payment. User role represents either 'seller', 'buyer' or 'arbiter', represents who signed for the payment of the escrow. 'seller' or 'arbiter' is valid for type 'refund', while 'buyer' or 'arbiter' is valid for type 'release'. You only need to provide this parameter when calling escrowrelease or escrowrefund.",
        "operationId" : "escrowcreaterawtransaction",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowCreateRawTransactionRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowcompleterefund" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Completes an escrow refund by creating the escrow complete refund transaction on syscoin blockchain.",
        "operationId" : "escrowcompleterefund",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowCompleteRefundRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowcompleterelease" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Completes an escrow release by creating the escrow complete release transaction on syscoin blockchain.",
        "operationId" : "escrowcompleterelease",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowCompleteReleaseRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowfeedback" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Send feedback for primary and secondary users in escrow, depending on who you are. Ratings are numbers from 1 to 5. User From and User To is either 'buyer', 'seller', 'reseller', or 'arbiter'.",
        "operationId" : "escrowfeedback",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowFeedbackRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowfilter" : {
      "get" : {
        "tags" : [ "Escrow" ],
        "description" : "scan and filter escrows",
        "operationId" : "escrowfilter",
        "parameters" : [ {
          "name" : "query",
          "in" : "query",
          "description" : "Generic filter query to pass into syscoinquery",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/EscrowIndex"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowbidhistory" : {
      "get" : {
        "tags" : [ "Escrow" ],
        "description" : "scan and filter bids on escrow contracts",
        "operationId" : "escrowbidhistory",
        "parameters" : [ {
          "name" : "query",
          "in" : "query",
          "description" : "Generic filter query to pass into syscoinquery",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/EscrowBidIndex"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowfeedbackhistory" : {
      "get" : {
        "tags" : [ "Escrow" ],
        "description" : "scan and filter feedbacks and ratings",
        "operationId" : "escrowfeedbackhistory",
        "parameters" : [ {
          "name" : "query",
          "in" : "query",
          "description" : "Generic filter query to pass into syscoinquery",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/EscrowFeedbackIndex"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowinfo" : {
      "get" : {
        "tags" : [ "Escrow" ],
        "description" : "Show stored values of a single escrow",
        "operationId" : "escrowinfo",
        "parameters" : [ {
          "name" : "escrow",
          "in" : "query",
          "description" : "GUID of escrow",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Escrow"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowbid" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Bid on an auction.",
        "operationId" : "escrowbid",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowBidRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowaddshipping" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Add shipping to an escrow.",
        "operationId" : "escrowaddshipping",
        "parameters" : [ {
          "name" : "escrow",
          "in" : "query",
          "description" : "GUID of escrow",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "shipping",
          "in" : "query",
          "description" : "Amount to add to shipping for merchant. Amount is in payment option currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here.",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "witness",
          "in" : "query",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction.",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrownew" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Create new arbitrated Syscoin escrow.",
        "operationId" : "escrownew",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowNewRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowrefund" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Refunds escrow funds back to buyer, buyer needs to sign the output transaction and send to the network. User role represents either 'seller' or 'arbiter'. Enter in rawTx if this is an external payment refund.",
        "operationId" : "escrowrefund",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowRefundRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/escrowrelease" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Releases escrow funds to seller, seller needs to sign the output transaction and send to the network. User role represents either 'buyer' or 'arbiter'. Enter in rawTx if this is an external payment release.",
        "operationId" : "escrowrelease",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowReleaseRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getaccount" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Returns the account associated with the given address.",
        "operationId" : "getaccount",
        "parameters" : [ {
          "name" : "syscoinaddress",
          "in" : "query",
          "description" : "The syscoin address for account lookup.",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getaccountaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Returns the current Syscoin address for receiving payments to this account.",
        "operationId" : "getaccountaddress",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "description" : "The account name for the address. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getaddressbalance" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns the balance for addresses or aliases",
        "operationId" : "getaddressbalance",
        "parameters" : [ {
          "name" : "addresses",
          "in" : "query",
          "required" : true,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "object",
              "properties" : { }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getaddressutxos" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns all unspent outputs for addresses or aliases",
        "operationId" : "getaddressutxos",
        "parameters" : [ {
          "name" : "addresses",
          "in" : "query",
          "required" : true,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/GetAddressUTXOsEntry"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getbalance" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.",
        "operationId" : "getbalance",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "description" : "DEPRECATED. The selected account, or \"*\" for entire wallet. It may be the default account using \"\".",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Also include balance in watchonly addresses (see 'importaddress')",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getwalletbalance" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns wallet balance for all accounts. Does not include watch only accounts.",
        "operationId" : "getwalletbalance",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getnewaddress" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Returns a new Syscoin address for receiving payments. If 'account' is specified (DEPRECATED), it is added to the address book so payments received with the address will be credited to 'account'.",
        "operationId" : "getnewaddress",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : false,
          "schema" : {
            "$ref" : "#/definitions/GetNewAddressRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getreceivedbyaccount" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.",
        "operationId" : "getreceivedbyaccount",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "description" : "The selected account, may be the default account using \"\".",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getreceivedbyaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns the total amount received by the given syscoinaddress in transactions with at least minconf confirmations.",
        "operationId" : "getreceivedbyaddress",
        "parameters" : [ {
          "name" : "syscoinaddress",
          "in" : "query",
          "description" : "The syscoin address for transactions.",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/gettransaction" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Get detailed information about in-wallet transaction <txid>",
        "operationId" : "gettransaction",
        "parameters" : [ {
          "name" : "txid",
          "in" : "query",
          "description" : "The transaction id",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Whether to include watchonly addresses in balance calculation and details[]",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Transaction"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getunconfirmedbalance" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns the server's total unconfirmed balance",
        "operationId" : "getunconfirmedbalance",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "number"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getwalletinfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns an object containing various wallet state info.",
        "operationId" : "getwalletinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/WalletInfo"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/importaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend.",
        "operationId" : "importaddress",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/ImportAddressRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/importprivkey" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Adds a private key (as returned by dumpprivkey) to your wallet.",
        "operationId" : "importprivkey",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/ImportPrivKeyRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/importpubkey" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.",
        "operationId" : "importpubkey",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/ImportPubKeyRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/importwallet" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Imports keys from a wallet dump file (see dumpwallet).",
        "operationId" : "importwallet",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/ImportWalletRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listaccounts" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Returns Object that has account names as keys, account balances as values.",
        "operationId" : "listaccounts",
        "parameters" : [ {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions with at least this many confirmations",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Include balances in watchonly addresses (see 'importaddress')",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "object",
              "properties" : { }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listaddressgroupings" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions",
        "operationId" : "listaddressgroupings",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "array",
                "items" : {
                  "$ref" : "#/definitions/AddressGrouping"
                }
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listreceivedbyaccount" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. List balances by account.",
        "operationId" : "listreceivedbyaccount",
        "parameters" : [ {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "includeempty",
          "in" : "query",
          "description" : "Whether to include accounts that haven't received any payments.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Whether to include watchonly addresses (see 'importaddress').",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Account"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listreceivedbyaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "List balances by receiving address.",
        "operationId" : "listreceivedbyaddress",
        "parameters" : [ {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "includeempty",
          "in" : "query",
          "description" : "Whether to include accounts that haven't received any payments.",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Whether to include watchonly addresses (see 'importaddress').",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/Account"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listsinceblock" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Get all transactions in blocks since block [blockhash], or all transactions if omitted",
        "operationId" : "listsinceblock",
        "parameters" : [ {
          "name" : "blockhash",
          "in" : "query",
          "description" : "The block hash to list transactions since",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Whether to include watchonly addresses (see 'importaddress').",
          "required" : false,
          "type" : "boolean"
        }, {
          "name" : "target-confirmations",
          "in" : "query",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/ListSinceBlockResponse"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/listtransactions" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'.",
        "operationId" : "listtransactions",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "description" : "DEPRECATED. The account name. Should be \"*\".",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of transactions to return",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "The number of transactions to skip",
          "required" : false,
          "type" : "number"
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Include transactions to watchonly addresses (see 'importaddress')",
          "required" : false,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/TransactionListEntry"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerinfo" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "Show values of an offer.",
        "operationId" : "offerinfo",
        "parameters" : [ {
          "name" : "guid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Offer"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerhistory" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "List all stored values of an offer.",
        "operationId" : "offerhistory",
        "parameters" : [ {
          "name" : "query",
          "in" : "query",
          "description" : "Generic filter query to pass into syscoinquery",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/OfferHistoryIndex"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerfilter" : {
      "get" : {
        "tags" : [ "Offers" ],
        "description" : "scan and filter offers",
        "operationId" : "offerfilter",
        "parameters" : [ {
          "name" : "query",
          "in" : "query",
          "description" : "Generic filter query to pass into syscoinquery",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of results to return",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "Show results from this GUID [from], empty means first",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/OfferIndex"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerlink" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "offerlink",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/OfferLinkRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offernew" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Create a new offer on the Syscoin decentralized marketplace. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "offernew",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/OfferNewRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success; Returns an array of 2 elements- tx id and offer GUID.",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/offerupdate" : {
      "post" : {
        "tags" : [ "Offers" ],
        "description" : "Perform an update on an offer you control. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "offerupdate",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/OfferUpdateRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success; Returns an array with 1 element- tx id.",
            "schema" : {
              "type" : "array",
              "items" : {
                "type" : "string"
              }
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/sendfrom" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED (use sendtoaddress). Sent an amount from an account to a syscoin address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "sendfrom",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SendFromRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/sendmany" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "sendmany",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SendManyRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/sendtoaddress" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Send an amount to a given address. The amount is a real and is rounded to the nearest 0.00000001. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "sendtoaddress",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SendToAddressRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/signmessage" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Sign a message with the private key of an address. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "signmessage",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SignMessageRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/walletlock" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Removes the wallet encryption key from memory, locking the wallet. After calling this method, you will need to call walletpassphrase again before being able to call any methods which require the wallet to be unlocked.",
        "operationId" : "walletlock",
        "consumes" : [ "application/json", "application/octet-stream" ],
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/walletpassphrase" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Stores the wallet decryption key in memory for 'timeout' seconds. This is needed prior to performing transactions related to private keys such as sending syscoins",
        "operationId" : "walletpassphrase",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/WalletPassphraseRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/walletpassphrasechange" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.",
        "operationId" : "walletpassphrasechange",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/WalletPassphraseChangeRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/privatesend" : {
      "post" : {
        "tags" : [ "Masternodes" ],
        "description" : "Anonymous mixing and sending coins.",
        "operationId" : "privatesend",
        "parameters" : [ {
          "name" : "command",
          "in" : "query",
          "description" : "'start' - Start Mixing\n'stop' - Stop mixing\n'reset' - Reset mixing\n",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getpoolinfo" : {
      "post" : {
        "tags" : [ "Masternodes" ],
        "description" : "Returns an object containing mixing pool related information",
        "operationId" : "getpoolinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/PoolInfoResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/masternode" : {
      "post" : {
        "tags" : [ "Masternodes" ],
        "description" : "Set of commands to execute masternode related actions.",
        "operationId" : "masternode",
        "parameters" : [ {
          "name" : "command",
          "in" : "query",
          "description" : "'count' - Print number of all known masternodes (optional 'ps', 'enabled', 'all', 'qualify')\n'current' - Print info on current masternode winner to be paid the next block (calculated locally)\n'debug' - Print masternode status\n'genkey' - Generate new masternodeprivkey\n'outputs' - Print masternode compatible outputs\n'start' - Start local Hot masternode configured in syscoin.conf\n'start-alias' - Start single remote masternode by assigned alias configured in masternode.conf\n'start-[mode]' - Start remote masternodes configured in masternode.conf ([mode] can be one of 'all', 'missing', or 'disabled')\n'status' - Print masternode status information\n'list' - Print list of all known masternodes (see masternodelist for more info)\n'list-conf' - Print masternode.conf in JSON format\n'winner' - Print info on next masternode winner to vote for\n'winners'- Print list of masternode winners         \n",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success"
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/masternodelist" : {
      "post" : {
        "tags" : [ "Masternodes" ],
        "description" : "Get a list of masternodes in different modes.",
        "operationId" : "masternodelist",
        "parameters" : [ {
          "name" : "mode",
          "in" : "query",
          "description" : "(optional/required to use filter, defaults = status) The mode to run list in\n'activeseconds' - Print number of seconds masternode recognized by the network as enabled (since latest issued \\\"masternode start/start-many/start-alias\\\")\n'addr' - Print ip address associated with a masternode (can be additionally filtered, partial match)\n'full' - Print info in format 'status protocol payee lastseen activeseconds lastpaidtime lastpaidblock IP' (can be additionally filtered, partial match)\n'info' - Print info in format 'status protocol payee lastseen activeseconds sentinelversion sentinelstate IP' (can be additionally filtered, partial match)\n'lastpaidblock' - Print the last block height a node was paid on the network\n'lastpaidtime' - Print the last time a node was paid on the network\n'lastseen' - Print timestamp of when a masternode was last seen on the network\n'payee' - Print Syscoin address associated with a masternode (can be additionally filtered,partial match)\n'protocol' - Print protocol of a masternode (can be additionally filtered, exact match)\n'pubkey' - Print the masternode (not collateral) public key\n'rank' - Print rank of a masternode based on current block\n'status' - Print masternode status PRE_ENABLED / ENABLED / EXPIRED / WATCHDOG_EXPIRED / NEW_START_REQUIRED / UPDATE_REQUIRED / POSE_BAN / OUTPOINT_SPENT (can be additionally filtered, partial match)\n",
          "required" : false,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success"
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/masternodebroadcast" : {
      "post" : {
        "tags" : [ "Masternodes" ],
        "description" : "Set of commands to create and relay masternode broadcast messages.",
        "operationId" : "masternodebroadcast",
        "parameters" : [ {
          "name" : "command",
          "in" : "query",
          "description" : "'create-alias' - Create single remote masternode broadcast message by assigned alias configured in masternode.conf\n'create-all' - Create remote masternode broadcast messages for all masternodes configured in masternode.conf\n'decode' - Decode masternode broadcast message\n'relay' - Relay masternode broadcast message to the network\n",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success"
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/sentinelping" : {
      "post" : {
        "tags" : [ "Masternodes" ],
        "description" : "Keep-alive message for masternode via TCP ping requests.",
        "operationId" : "sentinelping",
        "parameters" : [ {
          "name" : "version",
          "in" : "query",
          "description" : "Sentinel version in the form 'x.x.x'",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success"
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/gobject" : {
      "post" : {
        "tags" : [ "Masternodes" ],
        "description" : "Manage governance objects.",
        "operationId" : "gobject",
        "parameters" : [ {
          "name" : "command",
          "in" : "query",
          "description" : "'check' - Validate governance object data (proposal only)\n'prepare' - Prepare governance object by signing and creating tx\n'submit' - Submit governance object to network\n'deserialize' - Deserialize governance object from hex string to JSON\n'count' - Count governance objects and votes\n'get' - Get governance object by hash\n'getvotes' - Get all votes for a governance object hash (including old votes)\n'getcurrentvotes' - Get only current (tallying) votes for a governance object hash (does not include old votes)\n'list' - List governance objects (can be filtered by signal and/or object type)\n'diff' - List differences since last diff\n'vote-alias' - Vote on a governance object by masternode alias (using masternode.conf setup)\n'vote-conf' - Vote on a governance object by masternode configured in syscoin.conf\n'vote-many'- Vote on a governance object by all masternodes (using masternode.conf setup)    \n",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success"
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/voteraw" : {
      "post" : {
        "tags" : [ "Masternodes" ],
        "description" : "Compile and relay a governance vote with provided external signature instead of signing vote internally.",
        "operationId" : "voteraw",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/VoteRawRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getgovernanceinfo" : {
      "post" : {
        "tags" : [ "Masternodes" ],
        "description" : "Returns an object containing governance parameters",
        "operationId" : "getgovernanceinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/GovernanceInfoResponse"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getsuperblockbudget" : {
      "post" : {
        "tags" : [ "Masternodes" ],
        "description" : "Returns the absolute maximum sum of superblock payments allowed.",
        "operationId" : "getsuperblockbudget",
        "parameters" : [ {
          "name" : "height",
          "in" : "query",
          "description" : "Block height to check for superblock budget",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "default" : {
            "description" : "Error",
            "schema" : {
              "$ref" : "#/definitions/ErrorResponse"
            }
          }
        },
        "security" : [ {
          "token" : [ ]
        } ]
      },
      "x-swagger-router-controller" : "rpc"
    }
  },
  "securityDefinitions" : {
    "token" : {
      "type" : "apiKey",
      "name" : "token",
      "in" : "header"
    }
  },
  "definitions" : {
    "Info" : {
      "required" : [ "balance", "blocks", "connections", "dashversion", "difficulty", "errors", "keypoololdest", "keypoolsize", "paytxfee", "protocolversion", "proxy", "relayfee", "testnet", "timeoffset", "unlocked_until", "version", "walletversion" ],
      "properties" : {
        "version" : {
          "type" : "number",
          "description" : "the server version"
        },
        "dashversion" : {
          "type" : "number",
          "description" : "the dashpay server version"
        },
        "protocolversion" : {
          "type" : "number",
          "description" : "the protocol version"
        },
        "walletversion" : {
          "type" : "number",
          "description" : "the wallet version"
        },
        "balance" : {
          "type" : "number",
          "description" : "the total syscoin balance of the wallet"
        },
        "blocks" : {
          "type" : "number",
          "description" : "the current number of blocks processed in the server"
        },
        "timeoffset" : {
          "type" : "number",
          "description" : "the time offset"
        },
        "connections" : {
          "type" : "number",
          "description" : "the number of connections"
        },
        "proxy" : {
          "type" : "string",
          "description" : "the proxy used by the server"
        },
        "difficulty" : {
          "type" : "number",
          "description" : "the current difficulty"
        },
        "testnet" : {
          "type" : "boolean",
          "description" : "if the server is using testnet or not"
        },
        "keypoololdest" : {
          "type" : "number",
          "description" : "the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool"
        },
        "keypoolsize" : {
          "type" : "number",
          "description" : "how many new keys are pre-generated"
        },
        "unlocked_until" : {
          "type" : "number",
          "description" : "the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked"
        },
        "paytxfee" : {
          "type" : "number",
          "description" : "the transaction fee set in SYS/kB"
        },
        "relayfee" : {
          "type" : "number",
          "description" : "minimum relay fee for non-free transactions in SYS/kB"
        },
        "errors" : {
          "type" : "string",
          "description" : "any error messages"
        }
      },
      "example" : {
        "protocolversion" : 1.46581298050294517310021547018550336360931396484375,
        "relayfee" : 1.024645700144157789424070870154537260532379150390625,
        "timeoffset" : 7.061401241503109105224211816675961017608642578125,
        "blocks" : 2.3021358869347654518833223846741020679473876953125,
        "version" : 0.80082819046101150206595775671303272247314453125,
        "keypoolsize" : 4.1456080298839363962315474054776132106781005859375,
        "unlocked_until" : 7.3862819483858839220147274318151175975799560546875,
        "paytxfee" : 1.231513536777255612975068288506008684635162353515625,
        "dashversion" : 6.02745618307040320615897144307382404804229736328125,
        "difficulty" : 3.61607674925191080461672754609026014804840087890625,
        "proxy" : "aeiou",
        "walletversion" : 5.962133916683182377482808078639209270477294921875,
        "balance" : 5.63737665663332876420099637471139430999755859375,
        "keypoololdest" : 2.027123023002321833274663731572218239307403564453125,
        "testnet" : true,
        "connections" : 9.301444243932575517419536481611430644989013671875,
        "errors" : "aeiou"
      }
    },
    "MiningInfo" : {
      "required" : [ "blocks", "chain", "currentblocksize", "currentblocktx", "difficulty", "errors", "generate", "genproclimit", "pooledtx", "testnet" ],
      "properties" : {
        "blocks" : {
          "type" : "number",
          "description" : "The current block"
        },
        "currentblocksize" : {
          "type" : "number",
          "description" : "The last block size"
        },
        "currentblocktx" : {
          "type" : "number",
          "description" : "The last block transaction"
        },
        "difficulty" : {
          "type" : "number",
          "description" : "The current difficulty"
        },
        "errors" : {
          "type" : "string",
          "description" : "Current errors"
        },
        "genproclimit" : {
          "type" : "number",
          "description" : "The processor limit for generation. -1 if no generation."
        },
        "networkhashps" : {
          "type" : "number",
          "description" : "Current network hashrate in kbs"
        },
        "pooledtx" : {
          "type" : "number",
          "description" : "The size of the mem pool"
        },
        "testnet" : {
          "type" : "boolean",
          "description" : "If using testnet or not"
        },
        "chain" : {
          "type" : "string",
          "description" : "current network name as defined in BIP70 (main, test, regtest)"
        },
        "generate" : {
          "type" : "boolean",
          "description" : "If the generation is on or off (see getgenerate or setgenerate calls)"
        }
      },
      "example" : {
        "difficulty" : 5.962133916683182377482808078639209270477294921875,
        "chain" : "aeiou",
        "currentblocktx" : 1.46581298050294517310021547018550336360931396484375,
        "blocks" : 0.80082819046101150206595775671303272247314453125,
        "networkhashps" : 2.3021358869347654518833223846741020679473876953125,
        "currentblocksize" : 6.02745618307040320615897144307382404804229736328125,
        "genproclimit" : 5.63737665663332876420099637471139430999755859375,
        "testnet" : true,
        "pooledtx" : 7.061401241503109105224211816675961017608642578125,
        "generate" : true,
        "errors" : "aeiou"
      }
    },
    "PeerInfoResponse" : {
      "type" : "array",
      "items" : {
        "$ref" : "#/definitions/PeerInfo"
      }
    },
    "PeerInfo" : {
      "required" : [ "addr", "addrlocal", "banscore", "bytesrecv", "bytesrecv_per_msg", "bytessent", "bytessent_per_msg", "conntime", "id", "inbound", "inflight", "lastrecv", "lastsend", "minping", "pingtime", "relaytxes", "services", "startingheight", "subver", "synced_blocks", "synced_headers", "timeoffset", "version", "whitelisted" ],
      "properties" : {
        "id" : {
          "type" : "number",
          "description" : "Peer index"
        },
        "addr" : {
          "type" : "string",
          "description" : "The ip address and port of the peer"
        },
        "addrlocal" : {
          "type" : "string",
          "description" : "local address"
        },
        "services" : {
          "type" : "string",
          "description" : "The services offered"
        },
        "relaytxes" : {
          "type" : "boolean",
          "description" : "Whether peer has asked us to relay transactions to it"
        },
        "lastsend" : {
          "type" : "number",
          "description" : "The time in seconds since epoch (Jan 1 1970 GMT) of the last send"
        },
        "lastrecv" : {
          "type" : "number",
          "description" : "The time in seconds since epoch (Jan 1 1970 GMT) of the last receive"
        },
        "bytessent" : {
          "type" : "number",
          "description" : "The total bytes sent"
        },
        "bytesrecv" : {
          "type" : "number",
          "description" : "The total bytes received"
        },
        "conntime" : {
          "type" : "number",
          "description" : "The connection time in seconds since epoch (Jan 1 1970 GMT)"
        },
        "timeoffset" : {
          "type" : "number",
          "description" : "The time offset in seconds"
        },
        "pingtime" : {
          "type" : "number",
          "description" : "ping time"
        },
        "minping" : {
          "type" : "number",
          "description" : "minimum observed ping time"
        },
        "version" : {
          "type" : "number",
          "description" : "The peer version, such as 7001"
        },
        "subver" : {
          "type" : "string",
          "description" : "The string version"
        },
        "inbound" : {
          "type" : "boolean",
          "description" : "Inbound (true) or Outbound (false)"
        },
        "startingheight" : {
          "type" : "number",
          "description" : "The starting height (block) of the peer"
        },
        "banscore" : {
          "type" : "number",
          "description" : "The ban score"
        },
        "synced_headers" : {
          "type" : "number",
          "description" : "The last header we have in common with this peer"
        },
        "synced_blocks" : {
          "type" : "number",
          "description" : "The last block we have in common with this peer"
        },
        "inflight" : {
          "type" : "array",
          "description" : "The heights of blocks we're currently asking from this peer",
          "items" : {
            "type" : "number"
          }
        },
        "whitelisted" : {
          "type" : "boolean",
          "description" : "If this peer is whitelisted"
        },
        "bytessent_per_msg" : {
          "$ref" : "#/definitions/ByteMessageInfo"
        },
        "bytesrecv_per_msg" : {
          "$ref" : "#/definitions/ByteMessageInfo"
        }
      }
    },
    "ByteMessageInfo" : {
      "required" : [ "addr", "getheaders", "headers", "inv", "ping", "pong", "sendheaders", "verack", "version" ],
      "properties" : {
        "addr" : {
          "type" : "number"
        },
        "block" : {
          "type" : "number"
        },
        "getaddr" : {
          "type" : "number"
        },
        "getdata" : {
          "type" : "number"
        },
        "getheaders" : {
          "type" : "number"
        },
        "headers" : {
          "type" : "number"
        },
        "inv" : {
          "type" : "number"
        },
        "ping" : {
          "type" : "number"
        },
        "pong" : {
          "type" : "number"
        },
        "sendheaders" : {
          "type" : "number"
        },
        "tx" : {
          "type" : "number"
        },
        "verack" : {
          "type" : "number"
        },
        "version" : {
          "type" : "number"
        }
      }
    },
    "ValidateAddressResponse" : {
      "properties" : {
        "isvalid" : {
          "type" : "boolean",
          "description" : "If the address is valid or not. If not, this is the only property returned."
        },
        "address" : {
          "type" : "string",
          "description" : "The syscoin address validated"
        },
        "zaddress" : {
          "type" : "string",
          "description" : "The zcash t-addr associated with this syscoin address validated"
        },
        "btcaddress" : {
          "type" : "string",
          "description" : "The bitcoin address associated with this syscoin address validated"
        },
        "alias" : {
          "type" : "string",
          "description" : "The syscoin alias associated with this syscoin address validated"
        },
        "ismine" : {
          "type" : "boolean",
          "description" : "If the address is yours or not"
        },
        "iswatchonly" : {
          "type" : "boolean",
          "description" : "If the address is watchonly"
        },
        "isscript" : {
          "type" : "boolean",
          "description" : "If the key is a script"
        },
        "pubkey" : {
          "type" : "string",
          "description" : "The hex value of the raw public key"
        },
        "iscompressed" : {
          "type" : "boolean",
          "description" : "If the address is compressed"
        },
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account associated with the address, \"\" is the default account"
        }
      },
      "example" : {
        "address" : "aeiou",
        "btcaddress" : "aeiou",
        "isscript" : true,
        "iscompressed" : true,
        "alias" : "aeiou",
        "ismine" : true,
        "isvalid" : true,
        "zaddress" : "aeiou",
        "iswatchonly" : true,
        "account" : "aeiou",
        "pubkey" : "aeiou"
      }
    },
    "ErrorResponse" : {
      "required" : [ "message" ],
      "properties" : {
        "message" : {
          "type" : "string"
        }
      }
    },
    "Alias" : {
      "required" : [ "_id" ],
      "discriminator" : "_id",
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "encryption_privatekey" : {
          "type" : "string"
        },
        "encryption_publickey" : {
          "type" : "string"
        },
        "publicvalue" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "address" : {
          "type" : "string"
        },
        "time" : {
          "type" : "number"
        },
        "acceptcerttransfers" : {
          "type" : "boolean"
        },
        "expires_on" : {
          "type" : "number"
        },
        "expired" : {
          "type" : "boolean"
        }
      },
      "example" : {
        "publicvalue" : "aeiou",
        "address" : "aeiou",
        "expired" : true,
        "encryption_privatekey" : "aeiou",
        "expires_on" : 6.02745618307040320615897144307382404804229736328125,
        "txid" : "aeiou",
        "_id" : "aeiou",
        "time" : 0.80082819046101150206595775671303272247314453125,
        "encryption_publickey" : "aeiou",
        "acceptcerttransfers" : true
      }
    },
    "AliasIndex" : {
      "required" : [ "_id" ],
      "discriminator" : "_id",
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "address" : {
          "type" : "string"
        }
      },
      "example" : {
        "address" : "aeiou",
        "_id" : "aeiou"
      }
    },
    "AliasHistoryIndex" : {
      "required" : [ "_id" ],
      "discriminator" : "_id",
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "encryption_privatekey" : {
          "type" : "string"
        },
        "encryption_publickey" : {
          "type" : "string"
        },
        "publicvalue" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "time" : {
          "type" : "number"
        },
        "address" : {
          "type" : "string"
        },
        "acceptcerttransfers" : {
          "type" : "boolean"
        },
        "op" : {
          "type" : "string"
        }
      },
      "example" : {
        "op" : "aeiou",
        "publicvalue" : "aeiou",
        "address" : "aeiou",
        "encryption_privatekey" : "aeiou",
        "alias" : "aeiou",
        "_id" : "aeiou",
        "time" : 0.80082819046101150206595775671303272247314453125,
        "encryption_publickey" : "aeiou",
        "acceptcerttransfers" : true
      }
    },
    "AliasTxHistoryIndex" : {
      "required" : [ "_id" ],
      "discriminator" : "_id",
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "type" : {
          "type" : "string"
        },
        "guid" : {
          "type" : "string"
        },
        "value" : {
          "type" : "string"
        },
        "time" : {
          "type" : "number"
        }
      },
      "example" : {
        "alias" : "aeiou",
        "guid" : "aeiou",
        "_id" : "aeiou",
        "time" : 0.80082819046101150206595775671303272247314453125,
        "type" : "aeiou",
        "value" : "aeiou"
      }
    },
    "Cert" : {
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "title" : {
          "type" : "string"
        },
        "time" : {
          "type" : "number"
        },
        "publicvalue" : {
          "type" : "string"
        },
        "category" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "access_flags" : {
          "type" : "number"
        },
        "expires_on" : {
          "type" : "number"
        },
        "expired" : {
          "type" : "boolean"
        }
      },
      "example" : {
        "publicvalue" : "aeiou",
        "expired" : true,
        "expires_on" : 5.962133916683182377482808078639209270477294921875,
        "txid" : "aeiou",
        "alias" : "aeiou",
        "_id" : "aeiou",
        "time" : 6.02745618307040320615897144307382404804229736328125,
        "access_flags" : 1.46581298050294517310021547018550336360931396484375,
        "title" : "aeiou",
        "category" : "aeiou",
        "height" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "CertIndex" : {
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "category" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        }
      },
      "example" : {
        "alias" : "aeiou",
        "_id" : "aeiou",
        "title" : "aeiou",
        "category" : "aeiou",
        "height" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "CertHistoryIndex" : {
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "cert" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "time" : {
          "type" : "number"
        },
        "title" : {
          "type" : "string"
        },
        "publicvalue" : {
          "type" : "string"
        },
        "category" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "access_flags" : {
          "type" : "number"
        },
        "op" : {
          "type" : "string"
        }
      },
      "example" : {
        "op" : "aeiou",
        "publicvalue" : "aeiou",
        "alias" : "aeiou",
        "cert" : "aeiou",
        "_id" : "aeiou",
        "time" : 6.02745618307040320615897144307382404804229736328125,
        "access_flags" : 1.46581298050294517310021547018550336360931396484375,
        "title" : "aeiou",
        "category" : "aeiou",
        "height" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "Escrow" : {
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "time" : {
          "type" : "number"
        },
        "seller" : {
          "type" : "string"
        },
        "arbiter" : {
          "type" : "string"
        },
        "buyer" : {
          "type" : "string"
        },
        "witness" : {
          "type" : "string"
        },
        "offer" : {
          "type" : "string"
        },
        "offer_price" : {
          "type" : "string"
        },
        "reseller" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "number"
        },
        "total_with_fee" : {
          "type" : "number"
        },
        "total_without_fee" : {
          "type" : "number"
        },
        "bid_in_offer_currency_per_unit" : {
          "type" : "number"
        },
        "total_or_bid_in_payment_option_per_unit" : {
          "type" : "number"
        },
        "buynow" : {
          "type" : "boolean"
        },
        "commission" : {
          "type" : "number"
        },
        "arbiterfee" : {
          "type" : "number"
        },
        "networkfee" : {
          "type" : "number"
        },
        "witnessfee" : {
          "type" : "number"
        },
        "shipping" : {
          "type" : "number"
        },
        "deposit" : {
          "type" : "number"
        },
        "currency" : {
          "type" : "string"
        },
        "exttxid" : {
          "type" : "string"
        },
        "escrowaddress" : {
          "type" : "string"
        },
        "paymentoption" : {
          "type" : "string"
        },
        "redeem_txid" : {
          "type" : "string"
        },
        "redeem_script" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "role" : {
          "type" : "string"
        },
        "expired" : {
          "type" : "boolean"
        },
        "status" : {
          "type" : "string"
        }
      },
      "example" : {
        "seller" : "aeiou",
        "total_without_fee" : 5.962133916683182377482808078639209270477294921875,
        "role" : "aeiou",
        "redeem_txid" : "aeiou",
        "offer" : "aeiou",
        "expired" : true,
        "shipping" : 4.1456080298839363962315474054776132106781005859375,
        "arbiterfee" : 9.301444243932575517419536481611430644989013671875,
        "commission" : 7.061401241503109105224211816675961017608642578125,
        "currency" : "aeiou",
        "escrowaddress" : "aeiou",
        "height" : 1.231513536777255612975068288506008684635162353515625,
        "total_with_fee" : 1.46581298050294517310021547018550336360931396484375,
        "quantity" : 6.02745618307040320615897144307382404804229736328125,
        "witnessfee" : 2.027123023002321833274663731572218239307403564453125,
        "total_or_bid_in_payment_option_per_unit" : 2.3021358869347654518833223846741020679473876953125,
        "paymentoption" : "aeiou",
        "networkfee" : 3.61607674925191080461672754609026014804840087890625,
        "reseller" : "aeiou",
        "txid" : "aeiou",
        "buyer" : "aeiou",
        "offer_price" : "aeiou",
        "witness" : "aeiou",
        "arbiter" : "aeiou",
        "buynow" : true,
        "exttxid" : "aeiou",
        "deposit" : 7.3862819483858839220147274318151175975799560546875,
        "redeem_script" : "aeiou",
        "_id" : "aeiou",
        "time" : 0.80082819046101150206595775671303272247314453125,
        "bid_in_offer_currency_per_unit" : 5.63737665663332876420099637471139430999755859375,
        "status" : "aeiou"
      }
    },
    "EscrowIndex" : {
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "offer" : {
          "type" : "string"
        },
        "escrow" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "seller" : {
          "type" : "string"
        },
        "arbiter" : {
          "type" : "string"
        },
        "buyer" : {
          "type" : "string"
        }
      },
      "example" : {
        "offer" : "aeiou",
        "seller" : "aeiou",
        "arbiter" : "aeiou",
        "escrow" : "aeiou",
        "_id" : "aeiou",
        "height" : 0.80082819046101150206595775671303272247314453125,
        "buyer" : "aeiou"
      }
    },
    "EscrowBidIndex" : {
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "offer" : {
          "type" : "string"
        },
        "escrow" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "bidder" : {
          "type" : "string"
        },
        "bid_in_offer_currency_per_unit" : {
          "type" : "string"
        },
        "bid_in_payment_option_per_unit" : {
          "type" : "string"
        },
        "witness" : {
          "type" : "string"
        },
        "status" : {
          "type" : "string"
        }
      },
      "example" : {
        "offer" : "aeiou",
        "bid_in_payment_option_per_unit" : "aeiou",
        "witness" : "aeiou",
        "bidder" : "aeiou",
        "escrow" : "aeiou",
        "_id" : "aeiou",
        "bid_in_offer_currency_per_unit" : "aeiou",
        "height" : 0.80082819046101150206595775671303272247314453125,
        "status" : "aeiou"
      }
    },
    "EscrowFeedbackIndex" : {
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "offer" : {
          "type" : "string"
        },
        "escrow" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "time" : {
          "type" : "number"
        },
        "rating" : {
          "type" : "number"
        },
        "feedbackuserfrom" : {
          "type" : "string"
        },
        "feedbackuserto" : {
          "type" : "string"
        },
        "feedback" : {
          "type" : "string"
        }
      },
      "example" : {
        "offer" : "aeiou",
        "feedback" : "aeiou",
        "feedbackuserfrom" : "aeiou",
        "rating" : 6.02745618307040320615897144307382404804229736328125,
        "escrow" : "aeiou",
        "txid" : "aeiou",
        "feedbackuserto" : "aeiou",
        "_id" : "aeiou",
        "time" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "EscrowRefundRequest" : {
      "required" : [ "escrowguid", "rawtx", "userrole" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string"
        },
        "userrole" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        },
        "witness" : {
          "type" : "string"
        }
      }
    },
    "EscrowReleaseRequest" : {
      "required" : [ "escrowguid", "rawtx", "userrole" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string"
        },
        "userrole" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        },
        "witness" : {
          "type" : "string"
        }
      }
    },
    "Transaction" : {
      "properties" : {
        "amount" : {
          "type" : "string",
          "description" : "The transaction amount in SYS"
        },
        "instantlock" : {
          "type" : "boolean",
          "description" : "Current transaction lock state"
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations"
        },
        "blockhash" : {
          "type" : "string",
          "description" : "The block hash"
        },
        "blockindex" : {
          "type" : "number",
          "description" : "The block index"
        },
        "blocktime" : {
          "type" : "number",
          "description" : "The time in seconds since epoch (1 Jan 1970 GMT)"
        },
        "txid" : {
          "type" : "string",
          "description" : "The transaction id."
        },
        "time" : {
          "type" : "number",
          "description" : "The transaction time in seconds since epoch (1 Jan 1970 GMT)"
        },
        "timereceived" : {
          "type" : "number",
          "description" : "The time received in seconds since epoch (1 Jan 1970 GMT)"
        },
        "bip125-replaceable" : {
          "type" : "string",
          "description" : "Whether this transaction could be replaced due to BIP125 (replace-by-fee)"
        },
        "details" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/TransactionDetailEntry"
          }
        },
        "hex" : {
          "type" : "string",
          "description" : "Raw data for transaction"
        }
      },
      "example" : {
        "amount" : "aeiou",
        "blockhash" : "aeiou",
        "timereceived" : 5.63737665663332876420099637471139430999755859375,
        "instantlock" : true,
        "blocktime" : 1.46581298050294517310021547018550336360931396484375,
        "bip125-replaceable" : "aeiou",
        "txid" : "aeiou",
        "details" : [ {
          "amount" : 2.3021358869347654518833223846741020679473876953125,
          "address" : "aeiou",
          "label" : "aeiou",
          "category" : "aeiou",
          "account" : "aeiou",
          "vout" : 7.061401241503109105224211816675961017608642578125
        } ],
        "hex" : "aeiou",
        "time" : 5.962133916683182377482808078639209270477294921875,
        "confirmations" : 0.80082819046101150206595775671303272247314453125,
        "blockindex" : 6.02745618307040320615897144307382404804229736328125
      }
    },
    "TransactionDetailEntry" : {
      "properties" : {
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account name involved in the transaction, can be \"\" for the default account."
        },
        "address" : {
          "type" : "string",
          "description" : "The syscoin address involved in the transaction"
        },
        "category" : {
          "type" : "string",
          "description" : "The category, either 'send' or 'receive'"
        },
        "amount" : {
          "type" : "number",
          "description" : "The amount in SYS"
        },
        "label" : {
          "type" : "string",
          "description" : "A comment for the address/transaction, if any"
        },
        "vout" : {
          "type" : "number",
          "description" : "the vout value"
        }
      },
      "example" : {
        "amount" : 2.3021358869347654518833223846741020679473876953125,
        "address" : "aeiou",
        "label" : "aeiou",
        "category" : "aeiou",
        "account" : "aeiou",
        "vout" : 7.061401241503109105224211816675961017608642578125
      }
    },
    "WalletInfo" : {
      "properties" : {
        "walletversion" : {
          "type" : "number",
          "description" : "the wallet version"
        },
        "balance" : {
          "type" : "number",
          "description" : "the total confirmed balance of the wallet in SYS"
        },
        "unconfirmed_balance" : {
          "type" : "number",
          "description" : "the total unconfirmed balance of the wallet in SYS"
        },
        "immature_balance" : {
          "type" : "number",
          "description" : "the total immature balance of the wallet in SYS"
        },
        "txcount" : {
          "type" : "number",
          "description" : "the total number of transactions in the wallet"
        },
        "keypoololdest" : {
          "type" : "number",
          "description" : "the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool"
        },
        "keypoolsize" : {
          "type" : "number",
          "description" : "how many new keys are pre-generated"
        },
        "keypoolsize_hd_internal" : {
          "type" : "number",
          "description" : "how many new keys are pre-generated for internal use (used for change outputs, only appears if the wallet is using this feature, otherwise external keys are used)"
        },
        "unlocked_until" : {
          "type" : "number",
          "description" : "the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked"
        },
        "paytxfee" : {
          "type" : "number",
          "description" : "the transaction fee configuration, set in SYS/kB"
        },
        "hdchainid" : {
          "type" : "string",
          "description" : "the ID of the HD chain"
        }
      },
      "example" : {
        "walletversion" : 0.80082819046101150206595775671303272247314453125,
        "balance" : 6.02745618307040320615897144307382404804229736328125,
        "txcount" : 5.63737665663332876420099637471139430999755859375,
        "keypoololdest" : 2.3021358869347654518833223846741020679473876953125,
        "keypoolsize_hd_internal" : 9.301444243932575517419536481611430644989013671875,
        "unconfirmed_balance" : 1.46581298050294517310021547018550336360931396484375,
        "hdchainid" : "aeiou",
        "immature_balance" : 5.962133916683182377482808078639209270477294921875,
        "keypoolsize" : 7.061401241503109105224211816675961017608642578125,
        "unlocked_until" : 3.61607674925191080461672754609026014804840087890625,
        "paytxfee" : 2.027123023002321833274663731572218239307403564453125
      }
    },
    "AddressGrouping" : {
      "properties" : {
        "syscoinaddress" : {
          "type" : "string",
          "description" : "The syscoin address"
        },
        "amount" : {
          "type" : "number",
          "description" : "The amount in SYS"
        },
        "account" : {
          "type" : "string",
          "description" : "(optional) The account (DEPRECATED)"
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "syscoinaddress" : "aeiou",
        "account" : "aeiou"
      }
    },
    "Account" : {
      "properties" : {
        "involvesWatchonly" : {
          "type" : "boolean",
          "description" : "Only returned if imported addresses were involved in transaction"
        },
        "account" : {
          "type" : "string",
          "description" : "The account name of the receiving account"
        },
        "amount" : {
          "type" : "number",
          "description" : "The total amount received by addresses with this account"
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations of the most recent transaction included"
        },
        "label" : {
          "type" : "string",
          "description" : "A comment for the address/transaction, if any"
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "involvesWatchonly" : true,
        "label" : "aeiou",
        "confirmations" : 6.02745618307040320615897144307382404804229736328125,
        "account" : "aeiou"
      }
    },
    "ListSinceBlockResponse" : {
      "properties" : {
        "transactions" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/SinceBlockTransactionEntry"
          }
        },
        "lastblock" : {
          "type" : "string",
          "description" : "The hash of the last block"
        }
      },
      "example" : {
        "lastblock" : "aeiou",
        "transactions" : [ {
          "amount" : 0.80082819046101150206595775671303272247314453125,
          "address" : "aeiou",
          "instantlock" : true,
          "fee" : 1.46581298050294517310021547018550336360931396484375,
          "txid" : "aeiou",
          "label" : "aeiou",
          "confirmations" : 5.962133916683182377482808078639209270477294921875,
          "vout" : 6.02745618307040320615897144307382404804229736328125,
          "blockhash" : "aeiou",
          "timereceived" : 9.301444243932575517419536481611430644989013671875,
          "blocktime" : 2.3021358869347654518833223846741020679473876953125,
          "comment" : "aeiou",
          "time" : 7.061401241503109105224211816675961017608642578125,
          "to" : "aeiou",
          "category" : "aeiou",
          "blockindex" : 5.63737665663332876420099637471139430999755859375,
          "account" : "aeiou"
        } ]
      }
    },
    "SinceBlockTransactionEntry" : {
      "properties" : {
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account name associated with the transaction. Will be \"\" for the default account."
        },
        "address" : {
          "type" : "string",
          "description" : "The syscoin address of the transaction. Not present for move transactions (category = move)."
        },
        "category" : {
          "type" : "string",
          "description" : "The transaction category. 'send' has negative amounts, 'receive' has positive amounts."
        },
        "amount" : {
          "type" : "number",
          "description" : "The amount in SYS. This is negative for the 'send' category, and for the 'move' category for moves outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds."
        },
        "vout" : {
          "type" : "number",
          "description" : "the vout value"
        },
        "fee" : {
          "type" : "number",
          "description" : "The amount of the fee in SYS. This is negative and only available for the 'send' category of transactions."
        },
        "instantlock" : {
          "type" : "boolean",
          "description" : "Current transaction lock state. Available for 'send' and 'receive' category of transactions."
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations for the transaction. Available for 'send' and 'receive' category of transactions."
        },
        "blockhash" : {
          "type" : "string",
          "description" : "The block hash containing the transaction. Available for 'send' and 'receive' category of transactions."
        },
        "blockindex" : {
          "type" : "number",
          "description" : "The block index containing the transaction. Available for 'send' and 'receive' category of transactions."
        },
        "blocktime" : {
          "type" : "number",
          "description" : "The block time in seconds since epoch (1 Jan 1970 GMT)."
        },
        "txid" : {
          "type" : "string",
          "description" : "The transaction id. Available for 'send' and 'receive' category of transactions."
        },
        "time" : {
          "type" : "number",
          "description" : "The transaction time in seconds since epoch (Jan 1 1970 GMT)."
        },
        "timereceived" : {
          "type" : "number",
          "description" : "The time received in seconds since epoch (Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions."
        },
        "comment" : {
          "type" : "string",
          "description" : "If a comment is associated with the transaction."
        },
        "label" : {
          "type" : "string",
          "description" : "A comment for the address/transaction, if any"
        },
        "to" : {
          "type" : "string",
          "description" : "If a comment to is associated with the transaction."
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "address" : "aeiou",
        "instantlock" : true,
        "fee" : 1.46581298050294517310021547018550336360931396484375,
        "txid" : "aeiou",
        "label" : "aeiou",
        "confirmations" : 5.962133916683182377482808078639209270477294921875,
        "vout" : 6.02745618307040320615897144307382404804229736328125,
        "blockhash" : "aeiou",
        "timereceived" : 9.301444243932575517419536481611430644989013671875,
        "blocktime" : 2.3021358869347654518833223846741020679473876953125,
        "comment" : "aeiou",
        "time" : 7.061401241503109105224211816675961017608642578125,
        "to" : "aeiou",
        "category" : "aeiou",
        "blockindex" : 5.63737665663332876420099637471139430999755859375,
        "account" : "aeiou"
      }
    },
    "TransactionListEntry" : {
      "properties" : {
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account name associated with the transaction. It will be \"\" for the default account."
        },
        "address" : {
          "type" : "string",
          "description" : "The syscoin address of the transaction. Not present for move transactions (category = move)."
        },
        "category" : {
          "type" : "string",
          "description" : "The transaction category. 'move' is a local (off blockchain) transaction between accounts, and not associated with an address, transaction id or block. 'send' and 'receive' transactions are associated with an address, transaction id and block details"
        },
        "amount" : {
          "type" : "number",
          "description" : "The amount in SYS. This is negative for the 'send' category, and for the 'move' category for moves outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds."
        },
        "vout" : {
          "type" : "number",
          "description" : "the vout value"
        },
        "fee" : {
          "type" : "number",
          "description" : "The amount of the fee in SYS. This is negative and only available for the 'send' category of transactions."
        },
        "instantlock" : {
          "type" : "boolean",
          "description" : "Current transaction lock state. Available for 'send' and 'receive' category of transactions."
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations for the transaction. Available for 'send' and'receive' category of transactions. Negative confirmations indicate the transation conflicts with the block chain"
        },
        "trusted" : {
          "type" : "boolean",
          "description" : "Whether we consider the outputs of this unconfirmed transaction safe to spend."
        },
        "blockhash" : {
          "type" : "string",
          "description" : "The block hash containing the transaction. Available for 'send' and 'receive' category of transactions."
        },
        "blockindex" : {
          "type" : "string",
          "description" : "The block index containing the transaction. Available for 'send' and 'receive' category of transactions."
        },
        "blocktime" : {
          "type" : "number",
          "description" : "The block time in seconds since epoch (1 Jan 1970 GMT)."
        },
        "txid" : {
          "type" : "string",
          "description" : "The transaction id. Available for 'send' and 'receive' category of transactions."
        },
        "time" : {
          "type" : "number",
          "description" : "The transaction time in seconds since epoch (midnight Jan 1 1970 GMT)."
        },
        "timereceived" : {
          "type" : "number",
          "description" : "The time received in seconds since epoch (midnight Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions."
        },
        "comment" : {
          "type" : "string",
          "description" : "If a comment is associated with the transaction."
        },
        "label" : {
          "type" : "string",
          "description" : "A comment for the address/transaction, if any"
        },
        "otheraccount" : {
          "type" : "string",
          "description" : "For the 'move' category of transactions, the account the funds came from (for receiving funds, positive amounts), or went to (for sending funds, negative amounts)."
        },
        "bip125-replaceable" : {
          "type" : "string",
          "description" : "Whether this transaction could be replaced due to BIP125 (replace-by-fee)"
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "address" : "aeiou",
        "instantlock" : true,
        "bip125-replaceable" : "aeiou",
        "fee" : 1.46581298050294517310021547018550336360931396484375,
        "txid" : "aeiou",
        "label" : "aeiou",
        "otheraccount" : "aeiou",
        "confirmations" : 5.962133916683182377482808078639209270477294921875,
        "vout" : 6.02745618307040320615897144307382404804229736328125,
        "blockhash" : "aeiou",
        "timereceived" : 7.061401241503109105224211816675961017608642578125,
        "trusted" : true,
        "blocktime" : 5.63737665663332876420099637471139430999755859375,
        "comment" : "aeiou",
        "time" : 2.3021358869347654518833223846741020679473876953125,
        "category" : "aeiou",
        "blockindex" : "aeiou",
        "account" : "aeiou"
      }
    },
    "Offer" : {
      "required" : [ "_id" ],
      "discriminator" : "_id",
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "cert" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "expires_on" : {
          "type" : "number"
        },
        "expired" : {
          "type" : "boolean"
        },
        "height" : {
          "type" : "number"
        },
        "category" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "price" : {
          "type" : "number"
        },
        "commission" : {
          "type" : "number"
        },
        "offerlink_guid" : {
          "type" : "string"
        },
        "offerlink_seller" : {
          "type" : "string"
        },
        "paymentoptions" : {
          "type" : "number"
        },
        "offer_units" : {
          "type" : "number"
        },
        "quantity" : {
          "type" : "number"
        },
        "offers_sold" : {
          "type" : "number"
        },
        "private" : {
          "type" : "boolean"
        },
        "description" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "address" : {
          "type" : "string"
        },
        "offertype" : {
          "type" : "string"
        },
        "auction_expires_on" : {
          "type" : "number"
        },
        "auction_reserve_price" : {
          "type" : "number"
        },
        "auction_require_witness" : {
          "type" : "boolean"
        },
        "auction_deposit" : {
          "type" : "number"
        }
      },
      "example" : {
        "auction_expires_on" : 3.61607674925191080461672754609026014804840087890625,
        "offer_units" : 2.3021358869347654518833223846741020679473876953125,
        "private" : true,
        "expires_on" : 0.80082819046101150206595775671303272247314453125,
        "offers_sold" : 9.301444243932575517419536481611430644989013671875,
        "description" : "aeiou",
        "cert" : "aeiou",
        "title" : "aeiou",
        "auction_deposit" : 4.1456080298839363962315474054776132106781005859375,
        "expired" : true,
        "price" : 1.46581298050294517310021547018550336360931396484375,
        "alias" : "aeiou",
        "currency" : "aeiou",
        "commission" : 5.962133916683182377482808078639209270477294921875,
        "auction_require_witness" : true,
        "height" : 6.02745618307040320615897144307382404804229736328125,
        "offertype" : "aeiou",
        "quantity" : 7.061401241503109105224211816675961017608642578125,
        "address" : "aeiou",
        "txid" : "aeiou",
        "offerlink_guid" : "aeiou",
        "paymentoptions" : 5.63737665663332876420099637471139430999755859375,
        "offerlink_seller" : "aeiou",
        "auction_reserve_price" : 2.027123023002321833274663731572218239307403564453125,
        "_id" : "aeiou",
        "category" : "aeiou"
      }
    },
    "OfferIndex" : {
      "required" : [ "_id" ],
      "discriminator" : "_id",
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "cert" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "category" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "price" : {
          "type" : "number"
        },
        "paymentoptions" : {
          "type" : "number"
        },
        "offer_units" : {
          "type" : "number"
        },
        "quantity" : {
          "type" : "number"
        },
        "private" : {
          "type" : "boolean"
        },
        "alias" : {
          "type" : "string"
        },
        "offertype" : {
          "type" : "string"
        },
        "auction_expires_on" : {
          "type" : "number"
        },
        "auction_reserve_price" : {
          "type" : "number"
        }
      },
      "example" : {
        "offertype" : "aeiou",
        "auction_expires_on" : 2.3021358869347654518833223846741020679473876953125,
        "offer_units" : 5.962133916683182377482808078639209270477294921875,
        "private" : true,
        "quantity" : 5.63737665663332876420099637471139430999755859375,
        "cert" : "aeiou",
        "title" : "aeiou",
        "paymentoptions" : 1.46581298050294517310021547018550336360931396484375,
        "auction_reserve_price" : 7.061401241503109105224211816675961017608642578125,
        "price" : 6.02745618307040320615897144307382404804229736328125,
        "alias" : "aeiou",
        "currency" : "aeiou",
        "_id" : "aeiou",
        "category" : "aeiou",
        "height" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "OfferHistoryIndex" : {
      "required" : [ "_id" ],
      "discriminator" : "_id",
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "offer" : {
          "type" : "string"
        },
        "cert" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "category" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "price" : {
          "type" : "number"
        },
        "commission" : {
          "type" : "number"
        },
        "paymentoptions" : {
          "type" : "number"
        },
        "offer_units" : {
          "type" : "number"
        },
        "quantity" : {
          "type" : "number"
        },
        "private" : {
          "type" : "boolean"
        },
        "description" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        },
        "offertype" : {
          "type" : "string"
        },
        "auction_expires_on" : {
          "type" : "number"
        },
        "auction_reserve_price" : {
          "type" : "number"
        },
        "auction_require_witness" : {
          "type" : "boolean"
        },
        "auction_deposit" : {
          "type" : "number"
        },
        "op" : {
          "type" : "string"
        }
      },
      "example" : {
        "offertype" : "aeiou",
        "auction_expires_on" : 7.061401241503109105224211816675961017608642578125,
        "op" : "aeiou",
        "offer_units" : 5.63737665663332876420099637471139430999755859375,
        "private" : true,
        "quantity" : 2.3021358869347654518833223846741020679473876953125,
        "description" : "aeiou",
        "cert" : "aeiou",
        "title" : "aeiou",
        "auction_deposit" : 3.61607674925191080461672754609026014804840087890625,
        "paymentoptions" : 5.962133916683182377482808078639209270477294921875,
        "auction_reserve_price" : 9.301444243932575517419536481611430644989013671875,
        "offer" : "aeiou",
        "price" : 6.02745618307040320615897144307382404804229736328125,
        "alias" : "aeiou",
        "currency" : "aeiou",
        "commission" : 1.46581298050294517310021547018550336360931396484375,
        "_id" : "aeiou",
        "category" : "aeiou",
        "auction_require_witness" : true,
        "height" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "AddMultisigAddressRequest" : {
      "required" : [ "keysobject", "nrequired" ],
      "properties" : {
        "nrequired" : {
          "type" : "number",
          "description" : "The number of required signatures out of the n keys or addresses."
        },
        "keysobject" : {
          "type" : "string",
          "description" : "A json array of syscoin addresses or hex-encoded public keys. [ \"address\"  (string) syscoin address or hex-encoded public key ... ]"
        },
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. An account to assign the addresses to."
        }
      }
    },
    "AliasNewRequest" : {
      "required" : [ "aliasname" ],
      "properties" : {
        "aliasname" : {
          "type" : "string",
          "description" : "Alias name"
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "Alias public profile data, 512 characters max."
        },
        "accepttransfers" : {
          "type" : "string",
          "description" : "set to No if this alias should not allow a certificate to be transferred to it. Defaults to Yes."
        },
        "expire_timestamp" : {
          "type" : "string",
          "description" : "Time in seconds. Future time when to expire alias. It is exponentially more expensive per year, calculation is FEERATE*(2.88^years). FEERATE is the dynamic satoshi per byte fee set in the rate peg alias used for this alias. Defaults to 1 year."
        },
        "address" : {
          "type" : "string",
          "description" : "Address for this alias."
        },
        "encryption_privatekey" : {
          "type" : "string",
          "description" : "Encrypted private key used for encryption/decryption of private data related to this alias. Should be encrypted to publickey."
        },
        "encryption_publickey" : {
          "type" : "string",
          "description" : "Public key used for encryption/decryption of private data related to this alias."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      }
    },
    "AliasUpdateWhitelistRequest" : {
      "required" : [ "entries", "owneralias" ],
      "properties" : {
        "owneralias" : {
          "type" : "string",
          "description" : "owner alias controlling this whitelist."
        },
        "entries" : {
          "type" : "array",
          "description" : " \"entries\"       (string) A json array of whitelist entries to add/remove/update [ \"alias\"     (string) Alias that you want to add to the affiliate whitelist. Can be * to represent that the offers owned by owner alias can be resold by anybody \"discount_percentage\"     (number) A discount percentage associated with this alias. The reseller can sell your offer at this discount, not accounting for any commissions he/she may set in his own reselling offer. 0 to 99. ,... ]",
          "items" : {
            "$ref" : "#/definitions/WhitelistEntry"
          }
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      }
    },
    "AliasUpdateRequest" : {
      "required" : [ "aliasname" ],
      "properties" : {
        "aliasname" : {
          "type" : "string",
          "description" : "Alias name"
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "Alias public profile data, 512 characters max."
        },
        "address" : {
          "type" : "string",
          "description" : "Address of alias."
        },
        "accepttransfers" : {
          "type" : "string",
          "description" : "set to false if this alias should not allow a certificate to be transferred to it. Defaults to true."
        },
        "expire_timestamp" : {
          "type" : "string",
          "description" : "Time in seconds. Future time when to expire alias. It is exponentially more expensive per year, calculation is 2.88^years. FEERATE is the dynamic satoshi per byte fee set in the rate peg alias used for this alias. Defaults to 1 year."
        },
        "encryption_privatekey" : {
          "type" : "string",
          "description" : "Encrypted private key used for encryption/decryption of private data related to this alias. If transferring, the key should be encrypted to alias_pubkey."
        },
        "encryption_publickey" : {
          "type" : "string",
          "description" : "Public key used for encryption/decryption of private data related to this alias. Useful if you are changing pub/priv keypair for encryption on this alias."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      }
    },
    "CertNewRequest" : {
      "required" : [ "alias", "public", "title" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "title" : {
          "type" : "string",
          "description" : "title, 256 characters max."
        },
        "public" : {
          "type" : "string",
          "description" : "public data, 512 characters max."
        },
        "category" : {
          "type" : "string",
          "description" : "category, 256 characters max. Defaults to certificates;"
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      }
    },
    "CertTransferRequest" : {
      "required" : [ "alias", "certkey" ],
      "properties" : {
        "certkey" : {
          "type" : "string",
          "description" : "Certificate guidkey."
        },
        "alias" : {
          "type" : "string",
          "description" : "Alias to transfer this certificate to."
        },
        "public" : {
          "type" : "string",
          "description" : "Public certificate data, 512 characters max."
        },
        "accessflags" : {
          "type" : "string",
          "description" : "Set new access flags for new owner for this certificate, 0 for read-only, 1 for edit, 2 for edit and transfer access."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      }
    },
    "CertUpdateRequest" : {
      "required" : [ "guid" ],
      "properties" : {
        "guid" : {
          "type" : "string",
          "description" : "Certificate guidkey."
        },
        "title" : {
          "type" : "string",
          "description" : "Certificate title, 256 characters max."
        },
        "public" : {
          "type" : "string",
          "description" : "Public certificate data, 512 characters max."
        },
        "category" : {
          "type" : "string",
          "description" : "Category, 256 characters max. Defaults to certificates."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      }
    },
    "SendRawTransactionRequest" : {
      "required" : [ "hexstring" ],
      "properties" : {
        "hexstring" : {
          "type" : "string"
        },
        "allowhighfees" : {
          "type" : "boolean"
        },
        "instantsend" : {
          "type" : "boolean"
        }
      }
    },
    "EscrowCreateRawTransactionRequest" : {
      "required" : [ "escrowguid", "inputs", "type" ],
      "properties" : {
        "type" : {
          "type" : "string"
        },
        "escrowguid" : {
          "type" : "string"
        },
        "inputs" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/GetAddressUTXOsEntry"
          }
        },
        "role" : {
          "type" : "string"
        }
      }
    },
    "EscrowCompleteRefundRequest" : {
      "required" : [ "escrowguid", "rawtx" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        },
        "witness" : {
          "type" : "string"
        }
      }
    },
    "EscrowCompleteReleaseRequest" : {
      "required" : [ "escrowguid", "rawtx" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        },
        "witness" : {
          "type" : "string"
        }
      }
    },
    "EscrowBidRequest" : {
      "required" : [ "alias", "bid_in_offer_currency", "bid_in_payment_option", "escrow" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "escrow" : {
          "type" : "string",
          "description" : "Escrow GUID to place bid on."
        },
        "bid_in_payment_option" : {
          "type" : "string",
          "description" : "Amount to bid on offer through escrow. Bid is in payment option currency. Example, If offer is paid in SYS and you have deposited 10 SYS in escrow and would like to increase your total bid to 14 SYS enter 14 here. It is per unit of purchase."
        },
        "bid_in_offer_currency" : {
          "type" : "string",
          "description" : "Converted value of bid_in_payment_option from paymentOption currency to offer currency. For example, offer is priced in USD and purchased in BTC, this field will be the BTC/USD value. It is per unit of purchase."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      }
    },
    "EscrowNewRequest" : {
      "required" : [ "alias", "arbiter", "buynow", "getamountandaddress", "offer", "quantity", "total_in_payment_option" ],
      "properties" : {
        "getamountandaddress" : {
          "type" : "string",
          "description" : "True or False. Get deposit and total escrow amount aswell as escrow address for funding. If buynow is false pass bid amount in bid_in_payment_option to get total needed to complete escrow. If buynow is true amount is calculated based on offer price and quantity."
        },
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "arbiter" : {
          "type" : "string",
          "description" : "Alias of arbiter."
        },
        "offer" : {
          "type" : "string",
          "description" : "GUID of offer that this escrow is managing."
        },
        "quantity" : {
          "type" : "string",
          "description" : "Quantity of items to buy of offer."
        },
        "buynow" : {
          "type" : "string",
          "description" : "Specify whether the escrow involves purchasing offer for the full offer price if set to true, or through a bidding auction if set to false. If buynow is false, an initial deposit may be used to secure a bid if required by the seller."
        },
        "total_in_payment_option" : {
          "type" : "string",
          "description" : "Total amount of the offer price. Amount is in paymentOption currency. It is per unit of purchase."
        },
        "shipping" : {
          "type" : "string",
          "description" : "Amount to add to shipping for merchant. Amount is in paymentOption currency. Example, If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here. Default is 0. Buyer can also add shipping using escrowaddshipping upon merchant request."
        },
        "networkfee" : {
          "type" : "string",
          "description" : "Network fee in satoshi per byte for the transaction. Generally the escrow transaction is about 400 bytes. Default is 25 for SYS or ZEC and 250 for BTC payments."
        },
        "arbiterfee" : {
          "type" : "string",
          "description" : "Arbiter fee in fractional amount of the amount_in_payment_option value. For example 0.75% is 0.0075 and represents 0.0075*amount_in_payment_option satoshis paid to arbiter in the event arbiter is used to resolve a dispute. Default and minimum is 0.005."
        },
        "witnessfee" : {
          "type" : "string",
          "description" : "Witness fee in fractional amount of the amount_in_payment_option value. For example 0.3% is 0.003 and represents 0.003*amount_in_payment_option satoshis paid to witness in the event witness signs off on an escrow through any of the following calls escrownew/escrowbid/escrowrelease/escrowrefund. Default is 0."
        },
        "exttx" : {
          "type" : "string",
          "description" : "External transaction ID if paid with another blockchain."
        },
        "paymentoption" : {
          "type" : "string",
          "description" : "If extTx is defined, specify a valid payment option used to make payment. Default is SYS."
        },
        "bid_in_payment_option" : {
          "type" : "string",
          "description" : "Initial bid amount you are willing to pay escrow for this offer. Amount is in paymentOption currency. It is per unit of purchase. If buynow is set to true, this value is disregarded."
        },
        "bid_in_offer_currency" : {
          "type" : "string",
          "description" : "Converted value of bid_in_payment_option from paymentOption currency to offer currency. For example, offer is priced in USD and purchased in BTC, this field will be the BTC/USD value. If buynow is set to true, this value is disregarded."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      }
    },
    "AliasPayRequest" : {
      "required" : [ "alias", "amounts", "currency" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "Alias you own to pay from"
        },
        "currency" : {
          "type" : "string",
          "description" : "Currency to pay from"
        },
        "amounts" : {
          "type" : "string",
          "description" : "A json object with aliases and amounts { \"address\":amount   (numeric or string) The syscoin alias is the key, the numeric amount (can be string) in SYS is the value ,... }"
        },
        "minconf" : {
          "type" : "number",
          "description" : "Only use the balance confirmed at least this many times."
        },
        "comment" : {
          "type" : "string",
          "description" : "A comment"
        }
      }
    },
    "GetNewAddressRequest" : {
      "properties" : {
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account name for the address to be linked to. If not provided, the default account \"\" is used. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name."
        }
      }
    },
    "ImportAddressRequest" : {
      "required" : [ "script" ],
      "properties" : {
        "script" : {
          "type" : "string",
          "description" : "The hex-encoded script (or address)"
        },
        "label" : {
          "type" : "string",
          "description" : "An optional label"
        },
        "rescan" : {
          "type" : "boolean",
          "description" : "Rescan the wallet for transactions"
        },
        "p2sh" : {
          "type" : "boolean",
          "description" : "Add the P2SH version of the script as well"
        }
      }
    },
    "ImportPrivKeyRequest" : {
      "required" : [ "syscoinprivkey" ],
      "properties" : {
        "syscoinprivkey" : {
          "type" : "string",
          "description" : "The private key (see dumpprivkey)"
        },
        "label" : {
          "type" : "string",
          "description" : "An optional label"
        },
        "rescan" : {
          "type" : "boolean",
          "description" : "Rescan the wallet for transactions"
        }
      }
    },
    "ImportPubKeyRequest" : {
      "required" : [ "pubkey" ],
      "properties" : {
        "pubkey" : {
          "type" : "string",
          "description" : "The hex-encoded public key"
        },
        "label" : {
          "type" : "string",
          "description" : "An optional label"
        },
        "rescan" : {
          "type" : "boolean",
          "description" : "Rescan the wallet for transactions"
        }
      }
    },
    "ImportWalletRequest" : {
      "required" : [ "filename" ],
      "properties" : {
        "filename" : {
          "type" : "string",
          "description" : "The wallet file"
        }
      }
    },
    "OfferLinkRequest" : {
      "required" : [ "alias", "commission", "guid" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "guid" : {
          "type" : "string",
          "description" : "offer guid that you are linking to"
        },
        "commission" : {
          "type" : "string",
          "description" : "percentage of profit desired over original offer price, > 0, ie 5 for 5%"
        },
        "description" : {
          "type" : "string",
          "description" : "description, 512 characters max. Defaults to original description."
        }
      }
    },
    "OfferNewRequest" : {
      "required" : [ "alias", "category", "currency", "description", "price", "quantity", "title" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "category" : {
          "type" : "string",
          "description" : "category, 256 characters max."
        },
        "title" : {
          "type" : "string",
          "description" : "title, 256 characters max."
        },
        "quantity" : {
          "type" : "string",
          "description" : "quantity, > 0 or -1 for infinite"
        },
        "price" : {
          "type" : "string",
          "description" : "price in <currency>, > 0"
        },
        "description" : {
          "type" : "string",
          "description" : "description, 512 characters max."
        },
        "currency" : {
          "type" : "string",
          "description" : "The currency code that you want your offer to be in ie USD."
        },
        "certguid" : {
          "type" : "string",
          "description" : "Set this to the guid of a certificate you wish to sell"
        },
        "paymentoptions" : {
          "type" : "string",
          "description" : "'SYS' to accept SYS only, 'BTC' for BTC only, 'ZEC' for zcash only, or a |-delimited string to accept multiple currencies (e.g. 'BTC|SYS' to accept BTC or SYS). Leave empty for default. Defaults to 'SYS'."
        },
        "private" : {
          "type" : "string",
          "description" : "set to true if this offer should be private not be searchable. Defaults to false."
        },
        "units" : {
          "type" : "string",
          "description" : "Units that 1 qty represents. For example if selling 1 BTC."
        },
        "offertype" : {
          "type" : "string",
          "description" : "Options of how an offer is sold. 'BUYNOW' for regular Buy It Now offer, 'AUCTION' to auction this offer while providing auction_expires/auction_reserve/auction_require_witness parameters, 'COIN' for offers selling cryptocurrency, or a | -delimited string to create an offer with multiple options(e.g. 'BUYNOW|AUCTION' to create an offer that is sold through an auction but has Buy It Now enabled as well).Leave empty for default. Defaults to 'BUYNOW'."
        },
        "auction_expires" : {
          "type" : "string",
          "description" : "If offerType is AUCTION, Datetime of expiration of an auction. Once merchant creates an offer as an auction, the expiry must be non-zero. The auction parameters will not be updateable until an auction expires."
        },
        "auction_reserve" : {
          "type" : "string",
          "description" : "If offerType is AUCTION, Reserve price of an offer publicly. Bids must be of higher price than the reserve price. Any bid below the reserve price will be rejected by consensus checks in escrow. Default is 0."
        },
        "auction_require_witness" : {
          "type" : "string",
          "description" : "If offerType is AUCTION, Require a witness signature for bids of an offer, or release/refund of an escrow funds in an auction for the offer. Set to true if you wish to require witness signature. Default is false."
        },
        "auction_deposit" : {
          "type" : "string",
          "description" : "If offerType is AUCTION. If you require a deposit for each bidder to ensure stake to bidders set this to a percentage of the offer price required to place deposit when doing an initial bid. For Example, 1% of the offer price would be 0.01. Default is 0."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      }
    },
    "OfferUpdateRequest" : {
      "required" : [ "alias", "guid" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "guid" : {
          "type" : "string",
          "description" : "GUID of offer to update."
        },
        "category" : {
          "type" : "string",
          "description" : "category, 256 characters max."
        },
        "title" : {
          "type" : "string",
          "description" : "title, 256 characters max."
        },
        "quantity" : {
          "type" : "string",
          "description" : "quantity, > 0 or -1 for infinite"
        },
        "price" : {
          "type" : "string",
          "description" : "price in <currency>, > 0"
        },
        "description" : {
          "type" : "string",
          "description" : "description, 512 characters max."
        },
        "currency" : {
          "type" : "string",
          "description" : "The currency code that you want your offer to be in ie USD."
        },
        "private" : {
          "type" : "string",
          "description" : "set to true if this offer should be private not be searchable. Defaults to false."
        },
        "certguid" : {
          "type" : "string",
          "description" : "Set this to the guid of a certificate you wish to sell"
        },
        "commission" : {
          "type" : "string",
          "description" : "For resold offers."
        },
        "paymentoptions" : {
          "type" : "string",
          "description" : "'SYS' to accept SYS only, 'BTC' for BTC only, 'ZEC' for zcash only, or a |-delimited string to accept multiple currencies (e.g. 'BTC|SYS' to accept BTC or SYS). Leave empty for default. Defaults to 'SYS'."
        },
        "offertype" : {
          "type" : "string",
          "description" : "Options of how an offer is sold. 'BUYNOW' for regular Buy It Now offer, 'AUCTION' to auction this offer while providing auction_expires/auction_reserve/auction_require_witness parameters, 'COIN' for offers selling cryptocurrency, or a | -delimited string to create an offer with multiple options(e.g. 'BUYNOW|AUCTION' to create an offer that is sold through an auction but has Buy It Now enabled as well).Leave empty for default. Defaults to 'BUYNOW'."
        },
        "auction_expires" : {
          "type" : "string",
          "description" : "If offerType is AUCTION, Datetime of expiration of an auction. Once merchant creates an offer as an auction, the expiry must be non-zero. The auction parameters will not be updateable until an auction expires."
        },
        "auction_reserve" : {
          "type" : "string",
          "description" : "If offerType is AUCTION, Reserve price of an offer publicly. Bids must be of higher price than the reserve price. Any bid below the reserve price will be rejected by consensus checks in escrow. Default is 0."
        },
        "auction_require_witness" : {
          "type" : "string",
          "description" : "If offerType is AUCTION, Require a witness signature for bids of an offer, or release/refund of an escrow funds in an auction for the offer. Set to true if you wish to require witness signature. Default is false."
        },
        "auction_deposit" : {
          "type" : "string",
          "description" : "If offerType is AUCTION. If you require a deposit for each bidder to ensure stake to bidders set this to a percentage of the offer price required to place deposit when doing an initial bid. For Example, 1% of the offer price would be 0.01. Default is 0."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      }
    },
    "SendFromRequest" : {
      "required" : [ "amount", "fromaccount", "tosyscoinaddress" ],
      "properties" : {
        "fromaccount" : {
          "type" : "string",
          "description" : "The name of the account to send funds from. May be the default account using \"\"."
        },
        "tosyscoinaddress" : {
          "type" : "string",
          "description" : "The syscoin address to send funds to."
        },
        "amount" : {
          "type" : "number",
          "description" : "he amount in SYS (transaction fee is added on top)."
        },
        "minconf" : {
          "type" : "number",
          "description" : "Only use funds with at least this many confirmations."
        },
        "addlockconf" : {
          "type" : "boolean",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend"
        },
        "comment" : {
          "type" : "string",
          "description" : "A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet."
        },
        "commentto" : {
          "type" : "string",
          "description" : "An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet."
        }
      }
    },
    "SendManyRequest" : {
      "required" : [ "amounts", "fromaccount" ],
      "properties" : {
        "fromaccount" : {
          "type" : "string",
          "description" : "DEPRECATED. The account to send the funds from. Should be \"\" for the default account"
        },
        "amounts" : {
          "type" : "string",
          "description" : "A json object with addresses and amounts { \"address\":amount   (numeric) The syscoin address is the key, the numeric amount in SYS is the value,...}"
        },
        "minconf" : {
          "type" : "number",
          "description" : "Only use the balance confirmed at least this many times."
        },
        "addlockconf" : {
          "type" : "boolean",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend"
        },
        "comment" : {
          "type" : "string",
          "description" : "A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet."
        },
        "subtractfeefromamount" : {
          "type" : "string",
          "description" : "A json array with addresses. The fee will be equally deducted from the amount of each selected address. Those recipients will receive less syscoins than you enter in their corresponding amount field. If no addresses are specified here, the sender pays the fee. [ \"address\" Subtract fee from this address,... ]"
        },
        "use_is" : {
          "type" : "string",
          "description" : "Send this transaction as InstantSend (default, false)."
        },
        "use_ps" : {
          "type" : "string",
          "description" : "Use anonymized funds only (default, false)."
        }
      }
    },
    "SendToAddressRequest" : {
      "required" : [ "amount", "syscoinaddress" ],
      "properties" : {
        "syscoinaddress" : {
          "type" : "string",
          "description" : "The syscoin address to send to."
        },
        "amount" : {
          "type" : "number",
          "description" : "The amount in SYS to send. eg 0.1"
        },
        "comment" : {
          "type" : "string",
          "description" : "A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet."
        },
        "commentto" : {
          "type" : "string",
          "description" : "An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet."
        },
        "subtractfeefromamount" : {
          "type" : "string",
          "description" : "The fee will be deducted from the amount being sent. The recipient will receive less syscoins than you enter in the amount field."
        },
        "use_is" : {
          "type" : "string",
          "description" : "Send this transaction as InstantSend (default, false)."
        },
        "use_ps" : {
          "type" : "string",
          "description" : "Use anonymized funds only (default, false)."
        }
      }
    },
    "SignMessageRequest" : {
      "required" : [ "message", "syscoinaddress" ],
      "properties" : {
        "syscoinaddress" : {
          "type" : "string",
          "description" : "The syscoin address to use for the private key."
        },
        "message" : {
          "type" : "string",
          "description" : "The message to create a signature of."
        }
      }
    },
    "WalletPassphraseRequest" : {
      "required" : [ "passphrase", "timeout" ],
      "properties" : {
        "passphrase" : {
          "type" : "string",
          "description" : "The wallet passphrase"
        },
        "timeout" : {
          "type" : "number",
          "description" : "The time to keep the decryption key in seconds."
        }
      }
    },
    "WalletPassphraseChangeRequest" : {
      "required" : [ "newpassphrase", "oldpassphrase" ],
      "properties" : {
        "oldpassphrase" : {
          "type" : "string",
          "description" : "The current passphrase"
        },
        "newpassphrase" : {
          "type" : "string",
          "description" : "The new passphrase"
        }
      }
    },
    "EscrowFeedbackRequest" : {
      "required" : [ "escrowguid", "feedback", "rating", "userfrom", "userto" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string"
        },
        "userfrom" : {
          "type" : "string"
        },
        "feedback" : {
          "type" : "string"
        },
        "rating" : {
          "type" : "string"
        },
        "userto" : {
          "type" : "string"
        },
        "witness" : {
          "type" : "string"
        }
      }
    },
    "LoginResponse" : {
      "required" : [ "message", "success", "token" ],
      "properties" : {
        "success" : {
          "type" : "boolean"
        },
        "message" : {
          "type" : "string"
        },
        "token" : {
          "type" : "string"
        }
      },
      "example" : {
        "success" : true,
        "message" : "aeiou",
        "token" : "aeiou"
      }
    },
    "GetBlockResponse" : {
      "properties" : {
        "hash" : {
          "type" : "string",
          "description" : "The block hash (same as provided)"
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations, or -1 if the block is not on the main chain"
        },
        "size" : {
          "type" : "number",
          "description" : "The block size"
        },
        "strippedsize" : {
          "type" : "number",
          "description" : "The block size excluding witness data"
        },
        "weight" : {
          "type" : "number",
          "description" : "The block weight (BIP 141)"
        },
        "height" : {
          "type" : "number",
          "description" : "The block height or index"
        },
        "version" : {
          "type" : "number",
          "description" : "The block version"
        },
        "versionHex" : {
          "type" : "string",
          "description" : "The block version formatted in hexadecimal"
        },
        "merkleroot" : {
          "type" : "string",
          "description" : "The merkle root"
        },
        "tx" : {
          "type" : "array",
          "description" : "The transaction ids",
          "items" : {
            "type" : "string"
          }
        },
        "time" : {
          "type" : "number",
          "description" : "The block time in seconds since epoch (Jan 1 1970 GMT)"
        },
        "mediantime" : {
          "type" : "number",
          "description" : "The median block time in seconds since epoch (Jan 1 1970 GMT)"
        },
        "nonce" : {
          "type" : "number",
          "description" : "The nonce"
        },
        "bits" : {
          "type" : "string",
          "description" : "The bits"
        },
        "difficulty" : {
          "type" : "number",
          "description" : "The difficulty"
        },
        "chainwork" : {
          "type" : "string",
          "description" : "Expected number of hashes required to produce the chain up to this block (in hex)"
        },
        "previousblockhash" : {
          "type" : "string",
          "description" : "The hash of the previous block"
        },
        "nextblockhash" : {
          "type" : "string",
          "description" : "The hash of the next block"
        },
        "data" : {
          "type" : "string",
          "description" : "(for verbose=false) A string that is serialized, hex-encoded data for block 'hash'."
        }
      },
      "example" : {
        "tx" : [ "aeiou" ],
        "mediantime" : 9.301444243932575517419536481611430644989013671875,
        "data" : "aeiou",
        "previousblockhash" : "aeiou",
        "bits" : "aeiou",
        "weight" : 5.962133916683182377482808078639209270477294921875,
        "versionHex" : "aeiou",
        "confirmations" : 0.80082819046101150206595775671303272247314453125,
        "version" : 2.3021358869347654518833223846741020679473876953125,
        "nonce" : 3.61607674925191080461672754609026014804840087890625,
        "nextblockhash" : "aeiou",
        "difficulty" : 2.027123023002321833274663731572218239307403564453125,
        "chainwork" : "aeiou",
        "size" : 6.02745618307040320615897144307382404804229736328125,
        "merkleroot" : "aeiou",
        "strippedsize" : 1.46581298050294517310021547018550336360931396484375,
        "time" : 7.061401241503109105224211816675961017608642578125,
        "hash" : "aeiou",
        "height" : 5.63737665663332876420099637471139430999755859375
      }
    },
    "GetBlockchainInfoResponse" : {
      "properties" : {
        "chain" : {
          "type" : "string",
          "description" : "Current network name as defined in BIP70 (main, test, regtest)"
        },
        "blocks" : {
          "type" : "number",
          "description" : "the current number of blocks processed in the server"
        },
        "headers" : {
          "type" : "number",
          "description" : "the current number of headers we have validated"
        },
        "bestblockhash" : {
          "type" : "string",
          "description" : "the hash of the currently best block"
        },
        "difficulty" : {
          "type" : "number",
          "description" : "the current difficulty"
        },
        "mediantime" : {
          "type" : "number",
          "description" : "median time for the current best block"
        },
        "verificationprogress" : {
          "type" : "number",
          "description" : "estimate of verification progress [0..1]"
        },
        "chainwork" : {
          "type" : "string",
          "description" : "total amount of work in active chain, in hexadecimal"
        },
        "pruned" : {
          "type" : "boolean",
          "description" : "if the blocks are subject to pruning"
        },
        "pruneheight" : {
          "type" : "number",
          "description" : "lowest-height complete block stored"
        },
        "softforks" : {
          "type" : "array",
          "description" : "status of softforks in progress",
          "items" : {
            "type" : "object",
            "properties" : { }
          }
        },
        "bip9_softforks" : {
          "type" : "object",
          "description" : "status of BIP9 softforks in progress",
          "properties" : { }
        }
      },
      "example" : {
        "difficulty" : 1.46581298050294517310021547018550336360931396484375,
        "headers" : 6.02745618307040320615897144307382404804229736328125,
        "bip9_softforks" : "{}",
        "chain" : "aeiou",
        "chainwork" : "aeiou",
        "mediantime" : 5.962133916683182377482808078639209270477294921875,
        "verificationprogress" : 5.63737665663332876420099637471139430999755859375,
        "blocks" : 0.80082819046101150206595775671303272247314453125,
        "pruned" : true,
        "softforks" : [ "{}" ],
        "pruneheight" : 2.3021358869347654518833223846741020679473876953125,
        "bestblockhash" : "aeiou"
      }
    },
    "EncryptWalletRequest" : {
      "required" : [ "passphrase" ],
      "properties" : {
        "passphrase" : {
          "type" : "string",
          "description" : "The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long."
        }
      }
    },
    "StoreDataRequest" : {
      "required" : [ "data" ],
      "properties" : {
        "data" : {
          "type" : "string",
          "description" : "The data to be stored on the decentralized storage facility. Max size 500kb."
        },
        "storeLocations" : {
          "type" : "array",
          "description" : "Array of data warehousing facilities to use to store the data, valid values: BFAZURE",
          "items" : {
            "type" : "string"
          }
        }
      }
    },
    "StoreDataResponse" : {
      "required" : [ "storeLocations" ],
      "properties" : {
        "storeLocations" : {
          "type" : "array",
          "description" : "Array of objects which describe where data is stored offchain",
          "items" : {
            "$ref" : "#/definitions/DataStoreLocation"
          }
        }
      },
      "example" : {
        "storeLocations" : [ {
          "dataUrl" : "aeiou"
        } ]
      }
    },
    "DataStoreLocation" : {
      "required" : [ "dataUrl" ],
      "properties" : {
        "dataUrl" : {
          "type" : "string",
          "description" : "URL from which the data can be fetched"
        }
      },
      "example" : {
        "dataUrl" : "aeiou"
      }
    },
    "NetworkInfo" : {
      "properties" : {
        "version" : {
          "type" : "number"
        },
        "subversion" : {
          "type" : "string"
        },
        "protocolversion" : {
          "type" : "number"
        },
        "localservices" : {
          "type" : "string"
        },
        "localrelay" : {
          "type" : "boolean"
        },
        "timeoffset" : {
          "type" : "number"
        },
        "connections" : {
          "type" : "number"
        },
        "networks" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/NetworkInfoDetails"
          }
        },
        "relayfee" : {
          "type" : "number"
        },
        "localaddresses" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "warnings" : {
          "type" : "string"
        }
      },
      "example" : {
        "localaddresses" : [ "aeiou" ],
        "protocolversion" : 6.02745618307040320615897144307382404804229736328125,
        "relayfee" : 5.63737665663332876420099637471139430999755859375,
        "subversion" : "aeiou",
        "timeoffset" : 1.46581298050294517310021547018550336360931396484375,
        "warnings" : "aeiou",
        "localrelay" : true,
        "networks" : [ {
          "proxy" : "aeiou",
          "limited" : true,
          "proxy_randomize_credentials" : true,
          "name" : "aeiou",
          "reachable" : true
        } ],
        "version" : 0.80082819046101150206595775671303272247314453125,
        "connections" : 5.962133916683182377482808078639209270477294921875,
        "localservices" : "aeiou"
      }
    },
    "NetworkInfoDetails" : {
      "properties" : {
        "name" : {
          "type" : "string"
        },
        "limited" : {
          "type" : "boolean"
        },
        "reachable" : {
          "type" : "boolean"
        },
        "proxy" : {
          "type" : "string"
        },
        "proxy_randomize_credentials" : {
          "type" : "boolean"
        }
      },
      "example" : {
        "proxy" : "aeiou",
        "limited" : true,
        "proxy_randomize_credentials" : true,
        "name" : "aeiou",
        "reachable" : true
      }
    },
    "WhitelistEntry" : {
      "properties" : {
        "alias" : {
          "type" : "string"
        },
        "discount_percentage" : {
          "type" : "number"
        }
      },
      "example" : {
        "alias" : "aeiou",
        "discount_percentage" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "GetAddressUTXOsEntry" : {
      "properties" : {
        "address" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "outputIndex" : {
          "type" : "number"
        },
        "script" : {
          "type" : "string"
        },
        "satoshis" : {
          "type" : "number"
        },
        "height" : {
          "type" : "number"
        }
      },
      "example" : {
        "outputIndex" : 0.80082819046101150206595775671303272247314453125,
        "address" : "aeiou",
        "txid" : "aeiou",
        "script" : "aeiou",
        "satoshis" : 6.02745618307040320615897144307382404804229736328125,
        "height" : 1.46581298050294517310021547018550336360931396484375
      }
    },
    "PoolInfoResponse" : {
      "properties" : {
        "state" : {
          "type" : "string"
        },
        "mixing_mode" : {
          "type" : "string"
        },
        "queue" : {
          "type" : "number"
        },
        "entries" : {
          "type" : "number"
        },
        "status" : {
          "type" : "string"
        },
        "outpoint" : {
          "type" : "string"
        },
        "addr" : {
          "type" : "string"
        },
        "keys_left" : {
          "type" : "string"
        },
        "warnings" : {
          "type" : "string"
        }
      },
      "example" : {
        "mixing_mode" : "aeiou",
        "entries" : 6.02745618307040320615897144307382404804229736328125,
        "warnings" : "aeiou",
        "state" : "aeiou",
        "addr" : "aeiou",
        "queue" : 0.80082819046101150206595775671303272247314453125,
        "outpoint" : "aeiou",
        "status" : "aeiou",
        "keys_left" : "aeiou"
      }
    },
    "VoteRawRequest" : {
      "required" : [ "governance-hash", "masternode-tx-hash", "masternode-tx-index", "time", "vote-outcome", "vote-sig", "vote-signal" ],
      "properties" : {
        "masternode-tx-hash" : {
          "type" : "string"
        },
        "masternode-tx-index" : {
          "type" : "string"
        },
        "governance-hash" : {
          "type" : "string"
        },
        "vote-signal" : {
          "type" : "string"
        },
        "vote-outcome" : {
          "type" : "string"
        },
        "time" : {
          "type" : "number"
        },
        "vote-sig" : {
          "type" : "string"
        }
      }
    },
    "GovernanceInfoResponse" : {
      "properties" : {
        "governanceminquorum" : {
          "type" : "number"
        },
        "masternodewatchdogmaxseconds" : {
          "type" : "number"
        },
        "proposalfee" : {
          "type" : "number"
        },
        "superblockcycle" : {
          "type" : "number"
        },
        "lastsuperblock" : {
          "type" : "number"
        },
        "nextsuperblock" : {
          "type" : "number"
        }
      },
      "example" : {
        "nextsuperblock" : 2.3021358869347654518833223846741020679473876953125,
        "proposalfee" : 1.46581298050294517310021547018550336360931396484375,
        "lastsuperblock" : 5.63737665663332876420099637471139430999755859375,
        "masternodewatchdogmaxseconds" : 6.02745618307040320615897144307382404804229736328125,
        "governanceminquorum" : 0.80082819046101150206595775671303272247314453125,
        "superblockcycle" : 5.962133916683182377482808078639209270477294921875
      }
    }
  }
}