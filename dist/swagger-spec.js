var swaggerSpec = 
{
  "swagger" : "2.0",
  "info" : {
    "version" : "1.1.4",
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
  }, {
    "name" : "Asset",
    "description" : "Assets are similar to ERC20 tokens"
  } ],
  "schemes" : [ "http", "https" ],
  "consumes" : [ "application/json" ],
  "produces" : [ "application/json" ],
  "paths" : {
    "/assetupdate" : {
      "post" : {
        "tags" : [ "Asset" ],
        "description" : "Perform an update on an asset you control.",
        "operationId" : "assetupdate",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AssetUpdateRequest"
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
    "/assettransfer" : {
      "post" : {
        "tags" : [ "Asset" ],
        "description" : "Transfer asset from one user to another.",
        "operationId" : "assettransfer",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AssetTransferRequest"
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
    "/assetallocationsenderstatus" : {
      "get" : {
        "tags" : [ "Asset" ],
        "description" : "Show status as it pertains to any current Z-DAG conflicts or warnings related to a sender or sender/txid combination of an asset allocation transfer. Leave txid empty if you are not checking for a specific transfer. Return value is in the status field and can represent 4 levels(-1:Not Found, 0:OK, 1:Warning or 2:Critical)",
        "operationId" : "assetallocationsenderstatus",
        "parameters" : [ {
          "name" : "asset",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "sender",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "txid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/AssetAllocationSenderStatus"
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
    "/assetallocationsend" : {
      "post" : {
        "tags" : [ "Asset" ],
        "description" : "Send an asset you own to another alias as an asset allocation.",
        "operationId" : "assetallocationsend",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AssetSendRequest"
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
    "/assetallocationinfo" : {
      "get" : {
        "tags" : [ "Asset" ],
        "description" : "Show stored values of a single asset allocation. Set getinputs to true if you want to get the allocation inputs, if applicable.",
        "operationId" : "assetallocationinfo",
        "parameters" : [ {
          "name" : "asset",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "alias",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "getinputs",
          "in" : "query",
          "required" : true,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/AssetAllocation"
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
    "/assetnew" : {
      "post" : {
        "tags" : [ "Asset" ],
        "description" : "Create a new Syscoin Asset.",
        "operationId" : "assetnew",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AssetNewRequest"
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
    "/assetsend" : {
      "post" : {
        "tags" : [ "Asset" ],
        "description" : "Send an asset allocation you own to another alias.",
        "operationId" : "assetsend",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AssetSendRequest"
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
    "/assetinfo" : {
      "get" : {
        "tags" : [ "Asset" ],
        "description" : "Show stored values of a single asset and its. Set getinputs to true if you want to get the allocation inputs, if applicable.",
        "operationId" : "assetinfo",
        "parameters" : [ {
          "name" : "asset",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "getinputs",
          "in" : "query",
          "required" : true,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/Asset"
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
    "/syscoinlistreceivedbyaddress" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns all addresses and balances associated with address",
        "operationId" : "syscoinlistreceivedbyaddress",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/SyscoinAddressEntry"
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
      "get" : {
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
    "/aliasbalance" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "Returns the total amount received by the given alias in transactions with at least minconf confirmations.",
        "operationId" : "aliasbalance",
        "parameters" : [ {
          "name" : "alias",
          "in" : "query",
          "description" : "The syscoin alias for transactions",
          "required" : true,
          "type" : "string"
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
        } ],
        "x-swagger-router-controller" : "Aliases"
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/aliaswhitelist" : {
      "get" : {
        "tags" : [ "Aliases" ],
        "description" : "List all affiliates for this alias.",
        "operationId" : "aliaswhitelist",
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
    "/aliasnewfund" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "fund an alias creation",
        "operationId" : "aliasnewfund",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AliasNewFundRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "string"
            }
          },
          "500" : {
            "description" : "Could not send raw transaction: Cannot decode transaction from hex string or No funds found in addresses provided ",
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
    "/aliasclearwhitelist" : {
      "post" : {
        "tags" : [ "Aliases" ],
        "description" : "Clear your whitelist(controls who can resell).",
        "operationId" : "aliasclearwhitelist",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/AliasClearWhiteListRequest"
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
          "500" : {
            "description" : "aliasclearwhitelist [owner alias] [witness].  Clear your whitelist(controls who can resell).",
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
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/EscrowacknowledgeRequest"
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
        "description" : "Send feedback for primary and secondary users in escrow, depending on who you are.",
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
              "$ref" : "#/definitions/EscrowFeedbackResponse"
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
          "name" : "escrowguid",
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
    "/generate" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Mine up to numblocks blocks immediately (before the RPC call returns).",
        "operationId" : "generate",
        "parameters" : [ {
          "name" : "numBlocks",
          "in" : "query",
          "description" : "How many blocks are generated immediately.",
          "required" : true,
          "type" : "number"
        }, {
          "name" : "maxtries",
          "in" : "query",
          "description" : "How many iterations to try (default = 1000000).",
          "required" : false,
          "type" : "number"
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
    "/generateescrowmultisig" : {
      "post" : {
        "tags" : [ "Escrow" ],
        "description" : "Generates a multisignature escrow transaction",
        "operationId" : "generateescrowmultisig",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/GenerateEscrowMultisigRequest"
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
    "/generatepublickey" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Generates a public key for a wallet.",
        "operationId" : "generatepublickey",
        "parameters" : [ ],
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
    "/getaddressesbyaccount" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Returns the list of addresses for the given account.",
        "operationId" : "getaddressesbyaccount",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "required" : true,
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
    "/getbalance" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "If account is not specified, returns the server's total available balance. If account is specified (DEPRECATED), returns the balance in the account. Note that the account \"\" is not the same as leaving the parameter out. The server total may be different to the balance in the default \"\" account.",
        "operationId" : "getbalance",
        "parameters" : [ {
          "name" : "account",
          "in" : "query",
          "description" : "It need \"*\" for entire wallet",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number"
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
        "description" : "Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations.",
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
          "type" : "integer",
          "default" : 1
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend.",
          "required" : false,
          "type" : "boolean",
          "default" : false
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
          "type" : "integer",
          "default" : 1
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend.",
          "required" : false,
          "type" : "boolean",
          "default" : false
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
      "post" : {
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
      "post" : {
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
      "post" : {
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
      "post" : {
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
        "description" : "Returns Object that has account names as keys, account balances as values.",
        "operationId" : "listaccounts",
        "parameters" : [ {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions with at least this many confirmations",
          "required" : false,
          "type" : "integer",
          "default" : 1
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend.",
          "required" : false,
          "type" : "boolean",
          "default" : false
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Include balances in watchonly addresses (see 'importaddress')",
          "required" : false,
          "type" : "boolean",
          "default" : false
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
                "$ref" : "#/definitions/AddressGrouping"
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
        "description" : "List balances by account.",
        "operationId" : "listreceivedbyaccount",
        "parameters" : [ {
          "name" : "minconf",
          "in" : "query",
          "description" : "Only include transactions confirmed at least this many times.",
          "required" : false,
          "type" : "number",
          "default" : 1.0
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend.",
          "required" : false,
          "type" : "boolean",
          "default" : false
        }, {
          "name" : "includeempty",
          "in" : "query",
          "description" : "Whether to include accounts that haven't received any payments.",
          "required" : false,
          "type" : "boolean",
          "default" : false
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Whether to include watchonly addresses (see 'importaddress').",
          "required" : false,
          "type" : "boolean",
          "default" : false
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
          "type" : "integer",
          "default" : 1
        }, {
          "name" : "addlockconf",
          "in" : "query",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend.",
          "required" : false,
          "type" : "boolean",
          "default" : false
        }, {
          "name" : "includeempty",
          "in" : "query",
          "description" : "Whether to include accounts that haven't received any payments.",
          "required" : false,
          "type" : "boolean",
          "default" : false
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Whether to include watchonly addresses (see 'importaddress').",
          "required" : false,
          "type" : "boolean",
          "default" : false
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/ListReceivedByAddress"
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
    "/listunspent" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns array of unspent transaction outputs with between minconf and maxconf (inclusive) confirmations. Optionally filter to only include txouts paid to specified addresses. Results are an array of Objects, each of which has: {txid, vout, scriptPubKey, amount, confirmations}",
        "operationId" : "listunspent",
        "parameters" : [ {
          "name" : "minconf",
          "in" : "query",
          "description" : "The minimum confirmations to filter.",
          "required" : false,
          "type" : "integer",
          "default" : 1
        }, {
          "name" : "maxconf",
          "in" : "query",
          "description" : "The maximum confirmations to filter",
          "required" : false,
          "type" : "number",
          "default" : 9999999.0
        }, {
          "name" : "adresses",
          "in" : "query",
          "description" : "A json array of syscoin addresses to filter",
          "required" : false,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/UnspentListEntry"
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
          "description" : "The account name. Should be \"*\".",
          "required" : false,
          "type" : "string",
          "default" : "*"
        }, {
          "name" : "count",
          "in" : "query",
          "description" : "The number of transactions to return",
          "required" : false,
          "type" : "number",
          "default" : 10.0
        }, {
          "name" : "from",
          "in" : "query",
          "description" : "The number of transactions to skip",
          "required" : false,
          "type" : "number",
          "default" : 0.0
        }, {
          "name" : "includeWatchonly",
          "in" : "query",
          "description" : "Include transactions to watchonly addresses (see 'importaddress')",
          "required" : false,
          "type" : "boolean",
          "default" : false
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
    "/move" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "DEPRECATED. Move a specified amount from one account in your wallet to another.",
        "operationId" : "move",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/MoveRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
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
    "/syscoindecoderawtransaction" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Decode raw syscoin transaction (serialized, hex-encoded) and display information pertaining to the service that is included in the transactiion data output(OP_RETURN)",
        "operationId" : "syscoindecoderawtransaction",
        "parameters" : [ {
          "name" : "hexstring",
          "in" : "query",
          "description" : "The transaction hex string.",
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
        "description" : "get address balance ",
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
              "$ref" : "#/definitions/getAddressBalanceResponse"
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
      "x-swagger-router-controller" : "rpc"
    },
    "/getaddressdeltas" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "getaddressdeltas",
        "operationId" : "getaddressdeltas",
        "parameters" : [ {
          "name" : "addresses",
          "in" : "query",
          "required" : true,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "start",
          "in" : "query",
          "required" : true,
          "type" : "number"
        }, {
          "name" : "end",
          "in" : "query",
          "required" : true,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/getAddressDeltasResponseObject"
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
        "x-swagger-router-controller" : "General"
      },
      "x-swagger-router-controller" : "rpc"
    },
    "/getaddressmempool" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "getaddressdeltas",
        "operationId" : "getaddressmempool",
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
                "$ref" : "#/definitions/getAddressMemPoolResponseObject"
              }
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
      "x-swagger-router-controller" : "rpc"
    },
    "/sentinelping" : {
      "get" : {
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
            "description" : "Success",
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
              "$ref" : "#/definitions/EscrowBidResponse"
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
    "/syscoinsendrawtransaction" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Signed raw transaction (serialized, hex-encoded) sent out to the network.",
        "operationId" : "syscoinsendrawtransaction",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SendRawTransactionRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/SendRawTransactionResponse"
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
    "/fundrawtransaction" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Add inputs to a transaction until it has enough in value to meet its out value.",
        "operationId" : "fundrawtransaction",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/FundRawTransactionRequest"
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
    "/lockunspent" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Updates list of temporarily unspendable outputs.",
        "operationId" : "lockunspent",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/LockUnspentRequest"
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
    "/signrawtransaction" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Sign inputs for raw transaction (serialized, hex-encoded).",
        "operationId" : "signrawtransaction",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/SignRawTransactionRequest"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/SignRawTransactionResponse"
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
    "/getblocktemplate" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Add inputs to a transaction until it has enough in value to meet its out value.",
        "operationId" : "getblocktemplate",
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
    "/getgenerate" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns true if generation is ON, otherwise false",
        "operationId" : "getgenerate",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
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
    "/setgenerate" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Set 'generate' true or false to turn generation on or off.\nGeneration is limited to 'genproclimit' processors, -1 is unlimited.\nSee the getgenerate call for the current setting\n",
        "operationId" : "setgenerate",
        "parameters" : [ {
          "name" : "generate",
          "in" : "query",
          "required" : true,
          "type" : "boolean"
        }, {
          "name" : "genproclimit",
          "in" : "query",
          "required" : false,
          "type" : "number"
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
    "/setnetworkactive" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Set 'networkactive' true or false\n",
        "operationId" : "setnetworkactive",
        "parameters" : [ {
          "name" : "state",
          "in" : "query",
          "required" : true,
          "type" : "boolean"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
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
    "/mnsync" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns the sync status, updates to the next step or resets it entirely.",
        "operationId" : "mnsync",
        "parameters" : [ {
          "name" : "command",
          "in" : "query",
          "description" : "'status' - Sync status\n'next' - Update to next step\n'reset' - Reset it entirely\n",
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
    "/dumphdinfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns an object containing sensitive private info about this HD wallet.",
        "operationId" : "dumphdinfo",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/DumpHdInfoResponse"
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
    "/debug" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Change debug category on the fly. Specify single category or use comma to specify many.",
        "operationId" : "debug",
        "parameters" : [ {
          "name" : "command",
          "in" : "query",
          "description" : "0|1|addrman|alert|bench|coindb|db|lock|rand\n|rpc|selectcoins|mempool|mempoolrej|net|proxy\n|prune|http|libevent|tor|zmq|syscoin|privatesend|instantsend\n|masternode|spork|keepass|mnpayments|gobject\n",
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
    "/privatesend" : {
      "get" : {
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
    "/importelectrumwallet" : {
      "get" : {
        "tags" : [ "Masternodes" ],
        "description" : "Imports keys from an Electrum wallet export file (.csv or .json).",
        "operationId" : "importelectrumwallet",
        "parameters" : [ {
          "name" : "filename",
          "in" : "query",
          "description" : "(string, required) The Electrum wallet export file, should be in csv or json format",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "index",
          "in" : "query",
          "description" : "(numeric, optional, default=0) Rescan the wallet for transactions starting from this block index",
          "required" : false,
          "type" : "number",
          "default" : 0.0
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
    "/instantsendtoaddress" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Send multiple times. Amounts are double-precision floating point numbers. Requires wallet passphrase to be set with walletpassphrase call.",
        "operationId" : "instantsendtoaddress",
        "parameters" : [ {
          "in" : "body",
          "name" : "request",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/instantSendToAddressRequest"
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
    "/getaddresstxids" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Get address transaction ids",
        "operationId" : "getaddresstxids",
        "parameters" : [ {
          "name" : "addresses",
          "in" : "query",
          "required" : true,
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }, {
          "name" : "start",
          "in" : "query",
          "required" : true,
          "type" : "number"
        }, {
          "name" : "end",
          "in" : "query",
          "required" : true,
          "type" : "number"
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
    "/getaddressutxos" : {
      "post" : {
        "tags" : [ "General" ],
        "description" : "Returns all unspent outputs for addresses or aliases",
        "operationId" : "getaddressutxos",
        "parameters" : [ {
          "in" : "body",
          "name" : "addresses",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/GetAddressUTXOsRequest"
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
    "/getblockhashes" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns array of hashes of blocks within the timestamp range provided.",
        "operationId" : "getblockhashes",
        "parameters" : [ {
          "name" : "high",
          "in" : "query",
          "required" : true,
          "type" : "number"
        }, {
          "name" : "low",
          "in" : "query",
          "required" : true,
          "type" : "number"
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
    "/getblockheaders" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns an array of items with information about <count> blockheaders starting from <hash>.\nIf verbose is false, each item is a string that is serialized, hex-encoded data for a single blockheader.\nIf verbose is true, each item is an Object with information about a single blockheader.\n",
        "operationId" : "getblockheaders",
        "parameters" : [ {
          "name" : "hash",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "count",
          "in" : "query",
          "required" : true,
          "type" : "number"
        }, {
          "name" : "verbose",
          "in" : "query",
          "required" : false,
          "type" : "boolean"
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
    "/getchaintips" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns chain tips",
        "operationId" : "getchaintips",
        "parameters" : [ ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/definitions/GetChainTipsResponse"
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
    "/getspentinfo" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns the txid and index where an output is spent",
        "operationId" : "getspentinfo",
        "parameters" : [ {
          "name" : "txid",
          "in" : "query",
          "required" : true,
          "type" : "string"
        }, {
          "name" : "index",
          "in" : "query",
          "required" : true,
          "type" : "number"
        } ],
        "responses" : {
          "200" : {
            "description" : "Success",
            "schema" : {
              "$ref" : "#/definitions/GetSpentInfoResponse"
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
      "get" : {
        "tags" : [ "General" ],
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
    "/getpoolinfo" : {
      "get" : {
        "tags" : [ "General" ],
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
    "/getsuperblockbudget" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Returns the absolute maximum sum of superblock payments allowed.",
        "operationId" : "getsuperblockbudget",
        "parameters" : [ {
          "name" : "index",
          "in" : "query",
          "description" : "The block index",
          "required" : true,
          "type" : "number"
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
    "/gobject" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Manage governance objects.",
        "operationId" : "gobject",
        "parameters" : [ {
          "name" : "command",
          "in" : "query",
          "description" : "'check' - Validate governance object data (proposal only)\n'prepare' - Prepare governance object by signing and creating tx\n'submit' - Submit governance object to network\n'deserialize' - Deserialize governance object from hex string to JSON\n'count' - Count governance objects and votes\n'get' - Get governance object by hash\n'getvotes' - Get all votes for a governance object hash (including old votes)\n'getcurrentvotes' - Get only current (tallying) votes for a governance object hash (does not include old votes)\n'list' - List governance objects (can be filtered by signal and/or object type)\n'diff' - List differences since last diff\n'vote-alias' - Vote on a governance object by masternode alias (using masternode.conf setup)\n'vote-conf' - Vote on a governance object by masternode configured in syscoin.conf\n'vote-many'- Vote on a governance object by all masternodes (using masternode.conf setup)\n",
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
    "/masternode" : {
      "get" : {
        "tags" : [ "General" ],
        "description" : "Set of commands to execute masternode related actions.",
        "operationId" : "masternode",
        "parameters" : [ {
          "name" : "command",
          "in" : "query",
          "description" : "'count' - Print number of all known masternodes (optional 'ps', 'enabled', 'all', 'qualify')\n'current' - Print info on current masternode winner to be paid the next block (calculated locally)\n'debug' - Print masternode status\n'genkey' - Generate new masternodeprivkey\n'outputs' - Print masternode compatible outputs\n'start' - Start local Hot masternode configured in syscoin.conf\n'start-alias' - Start single remote masternode by assigned alias configured in masternode.conf\n'start-[mode]' - Start remote masternodes configured in masternode.conf ([mode] can be one of 'all', 'missing', or 'disabled')\n'status' - Print masternode status information\n'list' - Print list of all known masternodes (see masternodelist for more info)\n'list-conf' - Print masternode.conf in JSON format\n'winner' - Print info on next masternode winner to vote for\n'winners'- Print list of masternode winners\n",
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
    "/masternodebroadcast" : {
      "get" : {
        "tags" : [ "General" ],
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
    "/masternodelist" : {
      "get" : {
        "tags" : [ "General" ],
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
    "instantSendToAddressRequest" : {
      "required" : [ "amount", "syscoinaddress" ],
      "properties" : {
        "syscoinaddress" : {
          "type" : "string",
          "description" : "(string, required) The syscoin address to send to."
        },
        "amount" : {
          "type" : "number",
          "description" : "(numeric, required) The amount in sys to send. eg 0.1"
        },
        "comment" : {
          "type" : "string",
          "description" : "(string, optional) A comment used to store what the transaction is for."
        },
        "comment-to" : {
          "type" : "string",
          "description" : "(string, optional) A comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, just kept in your wallet."
        },
        "subtractfeefromamount" : {
          "type" : "boolean",
          "description" : "The fee will be deducted from the amount being sent."
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
      },
      "example" : {
        "instantsend" : true,
        "allowhighfees" : true,
        "hexstring" : "hexstring"
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
        "address" : "address",
        "txid" : "txid",
        "script" : "script",
        "satoshis" : 6.02745618307040320615897144307382404804229736328125,
        "height" : 1.46581298050294517310021547018550336360931396484375
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
            "$ref" : "#/definitions/EscrowCreateRawTransactionDataRequest"
          }
        },
        "role" : {
          "type" : "string"
        }
      },
      "example" : {
        "role" : "role",
        "inputs" : [ {
          "txid" : "txid",
          "vout" : 0.80082819046101150206595775671303272247314453125,
          "satoshis" : 6.02745618307040320615897144307382404804229736328125
        }, {
          "txid" : "txid",
          "vout" : 0.80082819046101150206595775671303272247314453125,
          "satoshis" : 6.02745618307040320615897144307382404804229736328125
        } ],
        "escrowguid" : "escrowguid",
        "type" : "type"
      }
    },
    "EscrowacknowledgeRequest" : {
      "required" : [ "escrowguid", "witness" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string",
          "description" : "Escrow guid"
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "escrowguid" : "escrowguid"
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
          "type" : "number",
          "description" : "Amount to bid on offer through escrow. Bid is in payment option currency. Example, If offer is paid in SYS and you have deposited 10 SYS in escrow and would like to increase your total bid to 14 SYS enter 14 here. It is per unit of purchase."
        },
        "bid_in_offer_currency" : {
          "type" : "number",
          "description" : "Converted value of bid_in_payment_option from paymentOption currency to offer currency. For example, offer is priced in USD and purchased in BTC, this field will be the BTC/USD value. It is per unit of purchase."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "bid_in_offer_currency" : 6.02745618307040320615897144307382404804229736328125,
        "witness" : "witness",
        "bid_in_payment_option" : 0.80082819046101150206595775671303272247314453125,
        "alias" : "alias",
        "escrow" : "escrow"
      }
    },
    "VoteRawRequest" : {
      "required" : [ "governance-hash", "masternode-tx-hash", "masternode-tx-index", "time", "vote-outcome", "vote-sig", "vote-signal" ],
      "properties" : {
        "masternode-tx-hash" : {
          "type" : "string"
        },
        "masternode-tx-index" : {
          "type" : "number"
        },
        "governance-hash" : {
          "type" : "string"
        },
        "vote-signal" : {
          "type" : "number"
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
      },
      "example" : {
        "masternode-tx-index" : 0.80082819046101150206595775671303272247314453125,
        "vote-signal" : 6.02745618307040320615897144307382404804229736328125,
        "masternode-tx-hash" : "masternode-tx-hash",
        "governance-hash" : "governance-hash",
        "time" : 1.46581298050294517310021547018550336360931396484375,
        "vote-sig" : "vote-sig",
        "vote-outcome" : "vote-outcome"
      }
    },
    "getAddressMemPoolResponseObject" : {
      "properties" : {
        "satoshis" : {
          "type" : "string",
          "description" : "The difference of satoshis"
        },
        "txid" : {
          "type" : "string",
          "description" : "The related txid"
        },
        "index" : {
          "type" : "number",
          "description" : "The related input or output index"
        },
        "height" : {
          "type" : "number",
          "description" : "The block height"
        },
        "address" : {
          "type" : "string",
          "description" : "The base58check encoded address"
        },
        "timestamp" : {
          "type" : "number",
          "description" : "The time the transaction entered the mempool (seconds)"
        },
        "prevtxid" : {
          "type" : "string",
          "description" : "The previous txid (if spending)"
        },
        "prevout" : {
          "type" : "string",
          "description" : "The previous transaction output index (if spending)"
        }
      },
      "example" : {
        "address" : "address",
        "prevout" : "prevout",
        "txid" : "txid",
        "index" : 0.80082819046101150206595775671303272247314453125,
        "prevtxid" : "prevtxid",
        "satoshis" : "satoshis",
        "height" : 6.02745618307040320615897144307382404804229736328125,
        "timestamp" : 1.46581298050294517310021547018550336360931396484375
      }
    },
    "getAddressDeltasResponseObject" : {
      "properties" : {
        "satoshis" : {
          "type" : "string",
          "description" : "The difference of satoshis"
        },
        "txid" : {
          "type" : "string",
          "description" : "The related txid"
        },
        "index" : {
          "type" : "number",
          "description" : "The related input or output index"
        },
        "height" : {
          "type" : "number",
          "description" : "The block height"
        },
        "address" : {
          "type" : "string",
          "description" : "The base58check encoded address"
        }
      },
      "example" : {
        "address" : "address",
        "txid" : "txid",
        "index" : 0.80082819046101150206595775671303272247314453125,
        "satoshis" : "satoshis",
        "height" : 6.02745618307040320615897144307382404804229736328125
      }
    },
    "getAddressBalanceResponse" : {
      "properties" : {
        "balance" : {
          "type" : "string",
          "description" : "balance againts address"
        },
        "received" : {
          "type" : "string",
          "description" : "received againts address"
        }
      },
      "example" : {
        "balance" : "balance",
        "received" : "received"
      }
    },
    "Info" : {
      "required" : [ "balance", "blocks", "connections", "difficulty", "errors", "keypoololdest", "keypoolsize", "paytxfee", "protocolversion", "proxy", "relayfee", "testnet", "timeoffset", "unlocked_until", "version", "walletversion" ],
      "properties" : {
        "version" : {
          "type" : "number",
          "description" : "the server version"
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
        "protocolversion" : 6.02745618307040320615897144307382404804229736328125,
        "relayfee" : 1.231513536777255612975068288506008684635162353515625,
        "timeoffset" : 2.3021358869347654518833223846741020679473876953125,
        "blocks" : 5.63737665663332876420099637471139430999755859375,
        "version" : 0.80082819046101150206595775671303272247314453125,
        "keypoolsize" : 2.027123023002321833274663731572218239307403564453125,
        "unlocked_until" : 4.1456080298839363962315474054776132106781005859375,
        "paytxfee" : 7.3862819483858839220147274318151175975799560546875,
        "difficulty" : 9.301444243932575517419536481611430644989013671875,
        "proxy" : "proxy",
        "walletversion" : 1.46581298050294517310021547018550336360931396484375,
        "balance" : 5.962133916683182377482808078639209270477294921875,
        "keypoololdest" : 3.61607674925191080461672754609026014804840087890625,
        "testnet" : true,
        "connections" : 7.061401241503109105224211816675961017608642578125,
        "errors" : "errors"
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
        "chain" : "chain",
        "currentblocktx" : 1.46581298050294517310021547018550336360931396484375,
        "blocks" : 0.80082819046101150206595775671303272247314453125,
        "networkhashps" : 2.3021358869347654518833223846741020679473876953125,
        "currentblocksize" : 6.02745618307040320615897144307382404804229736328125,
        "genproclimit" : 5.63737665663332876420099637471139430999755859375,
        "testnet" : true,
        "pooledtx" : 7.061401241503109105224211816675961017608642578125,
        "generate" : true,
        "errors" : "errors"
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
        "address" : "address",
        "isscript" : true,
        "iscompressed" : true,
        "ismine" : true,
        "isvalid" : true,
        "iswatchonly" : true,
        "account" : "account",
        "pubkey" : "pubkey"
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
        "time" : {
          "type" : "number"
        },
        "address" : {
          "type" : "string"
        },
        "accepttransferflags" : {
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
        "publicvalue" : "publicvalue",
        "address" : "address",
        "expired" : true,
        "encryption_privatekey" : "encryption_privatekey",
        "expires_on" : 1.46581298050294517310021547018550336360931396484375,
        "txid" : "txid",
        "_id" : "_id",
        "time" : 0.80082819046101150206595775671303272247314453125,
        "encryption_publickey" : "encryption_publickey",
        "accepttransferflags" : 6.02745618307040320615897144307382404804229736328125
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
        }
      },
      "example" : {
        "publicvalue" : "publicvalue",
        "txid" : "txid",
        "alias" : "alias",
        "_id" : "_id",
        "time" : 6.02745618307040320615897144307382404804229736328125,
        "access_flags" : 1.46581298050294517310021547018550336360931396484375,
        "title" : "title",
        "category" : "category",
        "height" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "Escrow" : {
      "properties" : {
        "escrowtype" : {
          "type" : "string"
        },
        "escrow" : {
          "type" : "string"
        },
        "time" : {
          "type" : "string"
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
        "offer" : {
          "type" : "string"
        },
        "offerlink_seller" : {
          "type" : "string"
        },
        "offertitle" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "string"
        },
        "price" : {
          "type" : "string"
        },
        "systotal" : {
          "type" : "number"
        },
        "sysfee" : {
          "type" : "number"
        },
        "fee" : {
          "type" : "string"
        },
        "total" : {
          "type" : "string"
        },
        "totalwithfee" : {
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
          "type" : "number"
        },
        "paymemntoption_display" : {
          "type" : "string"
        },
        "redeem_txid" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "height" : {
          "type" : "string"
        },
        "pay_message" : {
          "type" : "string"
        },
        "expired" : {
          "type" : "number"
        },
        "status" : {
          "type" : "string"
        },
        "buyer_feedback" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "avg_buyer_rating" : {
          "type" : "number"
        },
        "seller_feedback" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "avg_seller_feedback" : {
          "type" : "number"
        },
        "arbiter_feedback" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "avg_arbiter_rating" : {
          "type" : "number"
        },
        "avg_rating_count" : {
          "type" : "number"
        },
        "avg_rating" : {
          "type" : "number"
        },
        "avg_rating_display" : {
          "type" : "string"
        }
      },
      "example" : {
        "escrowtype" : "escrowtype",
        "seller" : "seller",
        "sysfee" : 6.02745618307040320615897144307382404804229736328125,
        "pay_message" : "pay_message",
        "fee" : "fee",
        "redeem_txid" : "redeem_txid",
        "offer" : "offer",
        "total" : "total",
        "paymemntoption_display" : "paymemntoption_display",
        "expired" : 5.63737665663332876420099637471139430999755859375,
        "arbiter_feedback" : [ "arbiter_feedback", "arbiter_feedback" ],
        "price" : "price",
        "avg_rating" : 2.027123023002321833274663731572218239307403564453125,
        "escrow" : "escrow",
        "systotal" : 0.80082819046101150206595775671303272247314453125,
        "currency" : "currency",
        "escrowaddress" : "escrowaddress",
        "avg_rating_display" : "avg_rating_display",
        "totalwithfee" : 1.46581298050294517310021547018550336360931396484375,
        "height" : "height",
        "avg_seller_feedback" : 7.061401241503109105224211816675961017608642578125,
        "quantity" : "quantity",
        "paymentoption" : 5.962133916683182377482808078639209270477294921875,
        "txid" : "txid",
        "offerlink_seller" : "offerlink_seller",
        "buyer" : "buyer",
        "arbiter" : "arbiter",
        "avg_arbiter_rating" : 9.301444243932575517419536481611430644989013671875,
        "exttxid" : "exttxid",
        "seller_feedback" : [ "seller_feedback", "seller_feedback" ],
        "offertitle" : "offertitle",
        "avg_buyer_rating" : 2.3021358869347654518833223846741020679473876953125,
        "time" : "time",
        "buyer_feedback" : [ "buyer_feedback", "buyer_feedback" ],
        "avg_rating_count" : 3.61607674925191080461672754609026014804840087890625,
        "status" : "status"
      }
    },
    "EscrowRefundRequest" : {
      "required" : [ "escrowguid", "rawtx", "userrole" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string",
          "description" : "Escrow ID"
        },
        "userrole" : {
          "type" : "string",
          "description" : "User role represents either 'seller' or 'arbiter'"
        },
        "rawtx" : {
          "type" : "string",
          "description" : "signed response from escrowreleasecreaterawtransaction."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "escrowguid" : "escrowguid",
        "rawtx" : "rawtx",
        "userrole" : "userrole"
      }
    },
    "EscrowReleaseRequest" : {
      "required" : [ "escrowguid", "rawtx", "userrole" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string",
          "description" : "Escrow ID"
        },
        "userrole" : {
          "type" : "string",
          "description" : "User role represents either 'buyer' or 'arbiter'."
        },
        "rawtx" : {
          "type" : "string",
          "description" : "Signed response from escrowcreaterawtransaction."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "escrowguid" : "escrowguid",
        "rawtx" : "rawtx",
        "userrole" : "userrole"
      }
    },
    "Transaction" : {
      "properties" : {
        "amount" : {
          "type" : "string",
          "description" : "The transaction amount in SYS"
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
        "amount" : "amount",
        "blockhash" : "blockhash",
        "timereceived" : 5.63737665663332876420099637471139430999755859375,
        "blocktime" : 1.46581298050294517310021547018550336360931396484375,
        "txid" : "txid",
        "details" : [ {
          "amount" : 2.3021358869347654518833223846741020679473876953125,
          "address" : "address",
          "label" : "label",
          "category" : "category",
          "account" : "account",
          "vout" : 7.061401241503109105224211816675961017608642578125
        }, {
          "amount" : 2.3021358869347654518833223846741020679473876953125,
          "address" : "address",
          "label" : "label",
          "category" : "category",
          "account" : "account",
          "vout" : 7.061401241503109105224211816675961017608642578125
        } ],
        "hex" : "hex",
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
        "address" : "address",
        "label" : "label",
        "category" : "category",
        "account" : "account",
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
        "unlocked_until" : {
          "type" : "number",
          "description" : "the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked"
        },
        "paytxfee" : {
          "type" : "number",
          "description" : "the transaction fee configuration, set in SYS/kB"
        }
      },
      "example" : {
        "walletversion" : 0.80082819046101150206595775671303272247314453125,
        "balance" : 6.02745618307040320615897144307382404804229736328125,
        "txcount" : 5.63737665663332876420099637471139430999755859375,
        "keypoololdest" : 2.3021358869347654518833223846741020679473876953125,
        "unconfirmed_balance" : 1.46581298050294517310021547018550336360931396484375,
        "immature_balance" : 5.962133916683182377482808078639209270477294921875,
        "keypoolsize" : 7.061401241503109105224211816675961017608642578125,
        "unlocked_until" : 9.301444243932575517419536481611430644989013671875,
        "paytxfee" : 3.61607674925191080461672754609026014804840087890625
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
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "syscoinaddress" : "syscoinaddress"
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
        "label" : "label",
        "confirmations" : 6.02745618307040320615897144307382404804229736328125,
        "account" : "account"
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
        "lastblock" : "lastblock",
        "transactions" : [ {
          "amount" : 0.80082819046101150206595775671303272247314453125,
          "address" : "address",
          "fee" : 1.46581298050294517310021547018550336360931396484375,
          "txid" : "txid",
          "label" : "label",
          "confirmations" : 5.962133916683182377482808078639209270477294921875,
          "vout" : 6.02745618307040320615897144307382404804229736328125,
          "blockhash" : "blockhash",
          "timereceived" : 9.301444243932575517419536481611430644989013671875,
          "blocktime" : 2.3021358869347654518833223846741020679473876953125,
          "comment" : "comment",
          "time" : 7.061401241503109105224211816675961017608642578125,
          "to" : "to",
          "category" : "category",
          "blockindex" : 5.63737665663332876420099637471139430999755859375,
          "account" : "account"
        }, {
          "amount" : 0.80082819046101150206595775671303272247314453125,
          "address" : "address",
          "fee" : 1.46581298050294517310021547018550336360931396484375,
          "txid" : "txid",
          "label" : "label",
          "confirmations" : 5.962133916683182377482808078639209270477294921875,
          "vout" : 6.02745618307040320615897144307382404804229736328125,
          "blockhash" : "blockhash",
          "timereceived" : 9.301444243932575517419536481611430644989013671875,
          "blocktime" : 2.3021358869347654518833223846741020679473876953125,
          "comment" : "comment",
          "time" : 7.061401241503109105224211816675961017608642578125,
          "to" : "to",
          "category" : "category",
          "blockindex" : 5.63737665663332876420099637471139430999755859375,
          "account" : "account"
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
        "address" : "address",
        "fee" : 1.46581298050294517310021547018550336360931396484375,
        "txid" : "txid",
        "label" : "label",
        "confirmations" : 5.962133916683182377482808078639209270477294921875,
        "vout" : 6.02745618307040320615897144307382404804229736328125,
        "blockhash" : "blockhash",
        "timereceived" : 9.301444243932575517419536481611430644989013671875,
        "blocktime" : 2.3021358869347654518833223846741020679473876953125,
        "comment" : "comment",
        "time" : 7.061401241503109105224211816675961017608642578125,
        "to" : "to",
        "category" : "category",
        "blockindex" : 5.63737665663332876420099637471139430999755859375,
        "account" : "account"
      }
    },
    "UnspentListEntry" : {
      "properties" : {
        "txid" : {
          "type" : "string",
          "description" : "The transaction id"
        },
        "vout" : {
          "type" : "number",
          "description" : "The vout value"
        },
        "address" : {
          "type" : "string",
          "description" : "The syscoin address"
        },
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The associated account, or \"\" for the default account"
        },
        "scriptPubKey" : {
          "type" : "string",
          "description" : "The script key"
        },
        "amount" : {
          "type" : "number",
          "description" : "The transaction amount in SYS"
        },
        "confirmations" : {
          "type" : "number",
          "description" : "The number of confirmations"
        },
        "ps_rounds" : {
          "type" : "number",
          "description" : "The number of PS round"
        },
        "spendable" : {
          "type" : "boolean",
          "description" : "Whether we have the private keys to spend this output"
        },
        "solvable" : {
          "type" : "boolean",
          "description" : "Whether we know how to spend this output, ignoring the lack of keys"
        }
      },
      "example" : {
        "scriptPubKey" : "scriptPubKey",
        "amount" : 6.02745618307040320615897144307382404804229736328125,
        "ps_rounds" : 5.962133916683182377482808078639209270477294921875,
        "spendable" : true,
        "solvable" : true,
        "address" : "address",
        "txid" : "txid",
        "confirmations" : 1.46581298050294517310021547018550336360931396484375,
        "account" : "account",
        "vout" : 0.80082819046101150206595775671303272247314453125
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
          "description" : "The transaction category. 'move' is a local (off blockchain) transaction between accounts, and not associated with an address, transaction id or block. 'send' and 'receive' transactions are associated with an address, transaction id and block details. Example values&#58; 'send|receive|move'"
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
          "description" : "The number of blockchain confirmations for the transaction. Available for 'send' and 'receive' category of transactions. Negative confirmations indicate the transation conflicts with the block chain"
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
          "type" : "number",
          "description" : "The index of the transaction in the block that includes it. Available for 'send' and 'receive' category of transactions."
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
          "description" : "Whether this transaction could be replaced due to BIP125 (replace-by-fee); may be unknown for unconfirmed transactions not in the mempool. Example&#58; \"yes|no|unknown\""
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "address" : "address",
        "instantlock" : true,
        "bip125-replaceable" : "bip125-replaceable",
        "fee" : 1.46581298050294517310021547018550336360931396484375,
        "txid" : "txid",
        "label" : "label",
        "otheraccount" : "otheraccount",
        "confirmations" : 5.962133916683182377482808078639209270477294921875,
        "vout" : 6.02745618307040320615897144307382404804229736328125,
        "blockhash" : "blockhash",
        "timereceived" : 9.301444243932575517419536481611430644989013671875,
        "trusted" : true,
        "blocktime" : 2.3021358869347654518833223846741020679473876953125,
        "comment" : "comment",
        "time" : 7.061401241503109105224211816675961017608642578125,
        "category" : "category",
        "blockindex" : 5.63737665663332876420099637471139430999755859375,
        "account" : "account"
      }
    },
    "Message" : {
      "properties" : {
        "GUID" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "time" : {
          "type" : "number"
        },
        "from" : {
          "type" : "string"
        },
        "to" : {
          "type" : "string"
        },
        "subject" : {
          "type" : "string"
        },
        "message" : {
          "type" : "string"
        }
      }
    },
    "OfferAccept" : {
      "properties" : {
        "offer" : {
          "type" : "string"
        },
        "id" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "exttxid" : {
          "type" : "string"
        },
        "paymentoption" : {
          "type" : "number"
        },
        "paymentoption_display" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "time" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "number"
        },
        "currency" : {
          "type" : "string"
        },
        "offer_discount_percentage" : {
          "type" : "number"
        },
        "systotal" : {
          "type" : "number"
        },
        "sysprice" : {
          "type" : "number"
        },
        "price" : {
          "type" : "number"
        },
        "total" : {
          "type" : "number"
        },
        "buyer" : {
          "type" : "string"
        },
        "seller" : {
          "type" : "string"
        },
        "ismine" : {
          "type" : "boolean"
        },
        "status" : {
          "type" : "string"
        },
        "buyer_fedback" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "seller_fedback" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "avg_rating" : {
          "type" : "number"
        },
        "avg_rating_display" : {
          "type" : "string"
        },
        "pay_message" : {
          "type" : "string"
        }
      }
    },
    "OfferWhitelistEntry" : {
      "properties" : {
        "alias" : {
          "type" : "string"
        },
        "expiresin" : {
          "type" : "number"
        },
        "offer_discount_percentage" : {
          "type" : "number"
        }
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
          "type" : "string"
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
        "auction_expires_on" : 7.061401241503109105224211816675961017608642578125,
        "offer_units" : 5.63737665663332876420099637471139430999755859375,
        "private" : true,
        "expires_on" : 0.80082819046101150206595775671303272247314453125,
        "description" : "description",
        "cert" : "cert",
        "title" : "title",
        "auction_deposit" : 3.61607674925191080461672754609026014804840087890625,
        "expired" : true,
        "price" : 1.46581298050294517310021547018550336360931396484375,
        "alias" : "alias",
        "currency" : "currency",
        "commission" : 5.962133916683182377482808078639209270477294921875,
        "auction_require_witness" : true,
        "height" : 6.02745618307040320615897144307382404804229736328125,
        "offertype" : "offertype",
        "quantity" : 2.3021358869347654518833223846741020679473876953125,
        "address" : "address",
        "txid" : "txid",
        "offerlink_guid" : "offerlink_guid",
        "paymentoptions" : "paymentoptions",
        "offerlink_seller" : "offerlink_seller",
        "auction_reserve_price" : 9.301444243932575517419536481611430644989013671875,
        "_id" : "_id",
        "category" : "category"
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
      },
      "example" : {
        "nrequired" : 0.80082819046101150206595775671303272247314453125,
        "keysobject" : "keysobject",
        "account" : "account"
      }
    },
    "AliasClearWhiteListRequest" : {
      "required" : [ "owneralias", "witness" ],
      "properties" : {
        "owneralias" : {
          "type" : "string",
          "description" : "your alias"
        },
        "witness" : {
          "type" : "string",
          "description" : "a witness alias"
        }
      },
      "example" : {
        "witness" : "witness",
        "owneralias" : "owneralias"
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
      },
      "example" : {
        "witness" : "witness",
        "entries" : [ {
          "alias" : "alias",
          "discount_percentage" : 0.80082819046101150206595775671303272247314453125
        }, {
          "alias" : "alias",
          "discount_percentage" : 0.80082819046101150206595775671303272247314453125
        } ],
        "owneralias" : "owneralias"
      }
    },
    "AliasNewRequest" : {
      "required" : [ "accept_transfers_flags", "address", "aliasname", "encryption_privatekey", "encryption_publickey", "expire_timestamp", "publicvalue", "witness" ],
      "properties" : {
        "aliasname" : {
          "type" : "string",
          "description" : "Alias name"
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "alias public profile data, 256 characters max."
        },
        "accept_transfers_flags" : {
          "type" : "number",
          "description" : "0 for none, 1 for accepting certificate transfers, 2 for accepting asset transfers and 3 for all. Default is 3."
        },
        "expire_timestamp" : {
          "type" : "number",
          "description" : "Epoch time when to expire alias. It is exponentially more expensive per year, calculation is FEERATE*(2.88^years). FEERATE is the dynamic satoshi per byte fee set in the rate peg alias used for this alias. Defaults to 1 hour."
        },
        "address" : {
          "type" : "string",
          "description" : "Address for this alias."
        },
        "encryption_privatekey" : {
          "type" : "string",
          "description" : "Encrypted private key used for encryption decryption of private data related to this alias. Should be encrypted to publickey."
        },
        "encryption_publickey" : {
          "type" : "string",
          "description" : "Public key used for encryption decryption of private data related to this alias."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "aliasname" : "aliasname",
        "publicvalue" : "publicvalue",
        "address" : "address",
        "encryption_privatekey" : "encryption_privatekey",
        "expire_timestamp" : 6.02745618307040320615897144307382404804229736328125,
        "encryption_publickey" : "encryption_publickey",
        "accept_transfers_flags" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "AliasUpdateRequest" : {
      "required" : [ "address", "aliasname" ],
      "properties" : {
        "aliasname" : {
          "type" : "string",
          "description" : "Alias name"
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "alias public profile data, 256 characters max."
        },
        "accept_transfers_flags" : {
          "type" : "integer",
          "description" : "0 for none, 1 for accepting certificate transfers, 2 for accepting asset transfers and 3 for all. Default is 3."
        },
        "expire_timestamp" : {
          "type" : "integer",
          "description" : "Epoch time when to expire alias. It is exponentially more expensive per year, calculation is FEERATE*(2.88^years). FEERATE is the dynamic satoshi per byte fee set in the rate peg alias used for this alias. Defaults to 1 hour."
        },
        "address" : {
          "type" : "string",
          "description" : "Address for this alias."
        },
        "encryption_privatekey" : {
          "type" : "string",
          "description" : "Encrypted private key used for encryption decryption of private data related to this alias. Should be encrypted to publickey."
        },
        "encryption_publickey" : {
          "type" : "string",
          "description" : "Public key used for encryption decryption of private data related to this alias."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "aliasname" : "aliasname",
        "publicvalue" : "publicvalue",
        "address" : "address",
        "encryption_privatekey" : "encryption_privatekey",
        "expire_timestamp" : 6,
        "encryption_publickey" : "encryption_publickey",
        "accept_transfers_flags" : 0
      }
    },
    "CertNewRequest" : {
      "required" : [ "alias", "category", "title", "witness" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "title" : {
          "type" : "string",
          "description" : "title, 256 bytes max."
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "public data, 256 characters max."
        },
        "category" : {
          "type" : "string",
          "description" : "category, 25 characters max. Defaults to certificates;"
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "publicvalue" : "publicvalue",
        "alias" : "alias",
        "title" : "title",
        "category" : "category"
      }
    },
    "CertTransferRequest" : {
      "required" : [ "alias", "guid" ],
      "properties" : {
        "guid" : {
          "type" : "string",
          "description" : "Certificate guidkey."
        },
        "alias" : {
          "type" : "string",
          "description" : "Alias to transfer this certificate to."
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "public data, 256 characters max."
        },
        "accessflags" : {
          "type" : "number",
          "description" : "Set new access flags for new owner for this certificate, 0 for read-only, 1 for edit, 2 for edit and transfer access. Default is 2."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "publicvalue" : "publicvalue",
        "accessflags" : 0.80082819046101150206595775671303272247314453125,
        "guid" : "guid",
        "alias" : "alias"
      }
    },
    "CertUpdateRequest" : {
      "required" : [ "guid", "title", "witness" ],
      "properties" : {
        "guid" : {
          "type" : "string",
          "description" : "certificate guidkey."
        },
        "title" : {
          "type" : "string",
          "description" : "certificate title, 255 bytes max."
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "Public certificate data, 1024 characters max."
        },
        "category" : {
          "type" : "string",
          "description" : "category, 256 characters max. Defaults to \"certificates\""
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "publicvalue" : "publicvalue",
        "guid" : "guid",
        "title" : "title",
        "category" : "category"
      }
    },
    "EscrowClaimRefundRequest" : {
      "required" : [ "guid" ],
      "properties" : {
        "guid" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        }
      }
    },
    "EscrowClaimReleaseRequest" : {
      "required" : [ "guid" ],
      "properties" : {
        "guid" : {
          "type" : "string"
        },
        "rawtx" : {
          "type" : "string"
        }
      }
    },
    "EscrowCompleteRefundRequest" : {
      "required" : [ "escrowguid", "rawtx" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string",
          "description" : "Escrow ID"
        },
        "rawtx" : {
          "type" : "string",
          "description" : "Raw fully signed syscoin escrow transaction. It is the signed response from escrowcreaterawtransaction. You must sign this transaction externally prior to passing in."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "escrowguid" : "escrowguid",
        "rawtx" : "rawtx"
      }
    },
    "EscrowCompleteReleaseRequest" : {
      "required" : [ "escrowguid", "rawtx" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string",
          "description" : "Escrow ID"
        },
        "rawtx" : {
          "type" : "string",
          "description" : "Raw fully signed syscoin escrow transaction. It is the signed response from escrowcreaterawtransaction. You must sign this transaction externally prior to passing in."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "escrowguid" : "escrowguid",
        "rawtx" : "rawtx"
      }
    },
    "EscrowNewRequest" : {
      "required" : [ "alias", "arbiter_alias", "arbiter_fee", "bid_in_offer_currency", "bid_in_payment_option", "buynow", "extTx", "getamountandaddress", "network_fee", "offer", "paymentoption", "quantity", "shipping_amount", "total_in_payment_option", "witness_fee" ],
      "properties" : {
        "getamountandaddress" : {
          "type" : "boolean",
          "description" : "True or false. Get deposit and total escrow amount aswell as escrow address for funding. If buynow is false pass bid amount in bid_in_payment_option to get total needed to complete escrow. If buynow is true amount is calculated based on offer price and quantity."
        },
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "arbiter_alias" : {
          "type" : "string",
          "description" : "Alias of Arbiter."
        },
        "offer" : {
          "type" : "string",
          "description" : "GUID of offer that this escrow is managing."
        },
        "quantity" : {
          "type" : "integer",
          "description" : "Quantity of items to buy of offer."
        },
        "buynow" : {
          "type" : "boolean",
          "description" : "Specify whether the escrow involves purchasing offer for the full offer price if set to true, or through a bidding auction if set to false. If buynow is false, an initial deposit may be used to secure a bid if required by the seller."
        },
        "total_in_payment_option" : {
          "type" : "number",
          "description" : "Total amount of the offer price. Amount is in paymentOption currency. It is per unit of purchase."
        },
        "shipping_amount" : {
          "type" : "number",
          "description" : "Amount to add to shipping for merchant. Amount is in paymentOption currency. Example; If merchant requests 0.1 BTC for shipping and escrow is paid in BTC, enter 0.1 here. Default is 0. Buyer can also add shipping using escrowaddshipping upon merchant request."
        },
        "network_fee" : {
          "type" : "number",
          "description" : "Network fee in satoshi per byte for the transaction. Generally the escrow transaction is about 400 bytes. Default is 25 for SYS or ZEC and 250 for BTC payments"
        },
        "arbiter_fee" : {
          "type" : "number",
          "description" : "Arbiter fee in fractional amount of the amount_in_payment_option value. For example 0.75% is 0.0075 and represents 0.0075*amount_in_payment_option satoshis paid to arbiter in the event arbiter is used to resolve a dispute. Default and minimum is 0.005."
        },
        "witness_fee" : {
          "type" : "number",
          "description" : "Witness fee in fractional amount of the amount_in_payment_option value. For example 0.3% is 0.003 and represents 0.003*amount_in_payment_option satoshis paid to witness in the event witness signs off on an escrow through any of the following calls escrownew/escrowbid/escrowrelease/escrowrefund. Default is 0"
        },
        "extTx" : {
          "type" : "string",
          "description" : "External transaction ID if paid with another blockchain."
        },
        "paymentoption" : {
          "type" : "string",
          "description" : "If extTx is defined, specify a valid payment option used to make payment. Default is SYS."
        },
        "bid_in_payment_option" : {
          "type" : "number",
          "description" : "Initial bid amount you are willing to pay escrow for this offer. Amount is in paymentOption currency. It is per unit of purchase. If buynow is set to true, this value is disregarded."
        },
        "bid_in_offer_currency" : {
          "type" : "number",
          "description" : "Converted value of bid_in_payment_option from paymentOption currency to offer currency. For example; offer is priced in USD and purchased in BTC, this field will be the BTC/USD value. If buynow is set to true, this value is disregarded."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "bid_in_offer_currency" : 9.301444243932575517419536481611430644989013671875,
        "extTx" : "extTx",
        "quantity" : 0,
        "total_in_payment_option" : 6.02745618307040320615897144307382404804229736328125,
        "paymentoption" : "paymentoption",
        "witness_fee" : 2.3021358869347654518833223846741020679473876953125,
        "arbiter_alias" : "arbiter_alias",
        "bid_in_payment_option" : 7.061401241503109105224211816675961017608642578125,
        "network_fee" : 5.962133916683182377482808078639209270477294921875,
        "offer" : "offer",
        "shipping_amount" : 1.46581298050294517310021547018550336360931396484375,
        "witness" : "witness",
        "buynow" : true,
        "alias" : "alias",
        "arbiter_fee" : 5.63737665663332876420099637471139430999755859375,
        "getamountandaddress" : true
      }
    },
    "AliasPayRequest" : {
      "required" : [ "aliasfrom", "amounts" ],
      "properties" : {
        "aliasfrom" : {
          "type" : "string",
          "description" : "Alias to pay from"
        },
        "amounts" : {
          "type" : "string",
          "description" : "A stringified JSON object with aliases and amounts. { \"address\":amount, ... } (numeric or string) The syscoin alias is the key, the numeric amount (can be string) in SYS is the value."
        },
        "instantsend" : {
          "type" : "boolean",
          "description" : "Set to true to use InstantSend to send this transaction or false otherwise."
        },
        "subtractfeefromamount" : {
          "type" : "string",
          "description" : "Set to true to subtract fee from amount or false otherwise."
        }
      },
      "example" : {
        "amounts" : "amounts",
        "instantsend" : true,
        "aliasfrom" : "aliasfrom",
        "subtractfeefromamount" : "subtractfeefromamount"
      }
    },
    "GetNewAddressRequest" : {
      "properties" : {
        "account" : {
          "type" : "string",
          "description" : "DEPRECATED. The account name for the address to be linked to. If not provided, the default account \"\" is used. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name."
        }
      },
      "example" : {
        "account" : "account"
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
      },
      "example" : {
        "p2sh" : true,
        "label" : "label",
        "rescan" : true,
        "script" : "script"
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
      },
      "example" : {
        "syscoinprivkey" : "syscoinprivkey",
        "label" : "label",
        "rescan" : true
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
      },
      "example" : {
        "label" : "label",
        "rescan" : true,
        "pubkey" : "pubkey"
      }
    },
    "ImportWalletRequest" : {
      "required" : [ "filename" ],
      "properties" : {
        "filename" : {
          "type" : "string",
          "description" : "The wallet file"
        }
      },
      "example" : {
        "filename" : "filename"
      }
    },
    "MessageNewRequest" : {
      "required" : [ "fromalias", "frommessage", "subject", "toalias", "tomessage" ],
      "properties" : {
        "subject" : {
          "type" : "string",
          "description" : "Subject of message."
        },
        "fromalias" : {
          "type" : "string",
          "description" : "Alias to send message from."
        },
        "toalias" : {
          "type" : "string",
          "description" : "Alias to send message to."
        },
        "frommessage" : {
          "type" : "string",
          "description" : "Message encrypted to from alias."
        },
        "tomessage" : {
          "type" : "string",
          "description" : "Message encrypted to sending alias."
        }
      }
    },
    "MoveRequest" : {
      "required" : [ "amount", "fromaccount", "toaccount" ],
      "properties" : {
        "fromaccount" : {
          "type" : "string",
          "description" : "The name of the account to move funds from. May be the default account using \"\"."
        },
        "toaccount" : {
          "type" : "string",
          "description" : "The name of the account to move funds to. May be the default account using \"\"."
        },
        "amount" : {
          "type" : "number",
          "description" : "Quantity of SYS to move between accounts."
        },
        "minconf" : {
          "type" : "string",
          "description" : "Only use funds with at least this many confirmations."
        },
        "comment" : {
          "type" : "string",
          "description" : "An optional comment, stored in the wallet only."
        }
      },
      "example" : {
        "fromaccount" : "fromaccount",
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "minconf" : "minconf",
        "toaccount" : "toaccount",
        "comment" : "comment"
      }
    },
    "OfferAcceptRequest" : {
      "required" : [ "alias", "guid" ],
      "properties" : {
        "alias" : {
          "type" : "string",
          "description" : "An alias of the buyer."
        },
        "guid" : {
          "type" : "string",
          "description" : "guidkey from offer."
        },
        "quantity" : {
          "type" : "number",
          "description" : "quantity to buy. Defaults to 1."
        },
        "message" : {
          "type" : "string",
          "description" : "payment message to seller, 1KB max."
        },
        "exttxid" : {
          "type" : "string",
          "description" : "If paid in another coin, enter the Transaction ID here. Default is empty."
        },
        "paymentoption" : {
          "type" : "string",
          "description" : "If Ext TxId is defined, specify a valid payment option used to make payment. Default is SYS."
        }
      }
    },
    "OfferAddWhitelistRequest" : {
      "required" : [ "aliasguid", "offerguid" ],
      "properties" : {
        "offerguid" : {
          "type" : "string",
          "description" : "offer guid that you are adding to"
        },
        "aliasguid" : {
          "type" : "string",
          "description" : "alias guid representing an alias that you want to add to the affiliate list"
        },
        "discountPercentage" : {
          "type" : "number",
          "description" : "Percentage of discount given to affiliate for this offer. 0 to 99."
        }
      }
    },
    "OfferClearWhitelistRequest" : {
      "required" : [ "offerguid" ],
      "properties" : {
        "offerguid" : {
          "type" : "string"
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
          "type" : "number",
          "description" : "percentage of profit desired over original offer price, > 0, ie 5 for 5%"
        },
        "description" : {
          "type" : "string",
          "description" : "description, 1 KB max. Defaults to original description. Leave as '' to use default."
        },
        "witness" : {
          "type" : "string",
          "description" : "witness if any.  Leave '' if not available."
        }
      },
      "example" : {
        "witness" : "witness",
        "alias" : "alias",
        "guid" : "guid",
        "description" : "description",
        "commission" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "OfferRemoveWhitelistRequest" : {
      "required" : [ "aliasguid", "offerguid" ],
      "properties" : {
        "offerguid" : {
          "type" : "string"
        },
        "aliasguid" : {
          "type" : "string"
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
          "type" : "integer",
          "description" : "Only use funds with at least this many confirmations."
        },
        "addlockconf" : {
          "type" : "boolean",
          "description" : "Whether to add 5 confirmations to transactions locked via InstantSend.",
          "default" : false
        },
        "comment" : {
          "type" : "string",
          "description" : "A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet."
        },
        "commentto" : {
          "type" : "string",
          "description" : "An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet."
        }
      },
      "example" : {
        "fromaccount" : "fromaccount",
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "minconf" : 6,
        "addlockconf" : false,
        "commentto" : "commentto",
        "comment" : "comment",
        "tosyscoinaddress" : "tosyscoinaddress"
      }
    },
    "SendManyRequest" : {
      "required" : [ "amounts", "fromaccount" ],
      "properties" : {
        "fromaccount" : {
          "type" : "string",
          "description" : "The account to send the funds from. Should be \"\" for the default account"
        },
        "amounts" : {
          "type" : "string",
          "description" : "A json object with addresses and amounts { \"address\":amount   (numeric) The syscoin address is the key, the numeric amount in SYS is the value,...}"
        },
        "minconf" : {
          "type" : "integer",
          "description" : "Only use the balance confirmed at least this many times."
        },
        "addlockconf" : {
          "type" : "boolean",
          "description" : "Only use the balance confirmed at least this many times.",
          "default" : false
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
          "type" : "boolean",
          "description" : "Send this transaction as InstantSend (default: false)",
          "default" : false
        },
        "use_ps" : {
          "type" : "boolean",
          "description" : "Use anonymized funds only (default: false)",
          "default" : false
        }
      },
      "example" : {
        "fromaccount" : "fromaccount",
        "use_ps" : false,
        "amounts" : "amounts",
        "minconf" : 0,
        "addlockconf" : false,
        "use_is" : false,
        "comment" : "comment",
        "subtractfeefromamount" : "subtractfeefromamount"
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
          "type" : "boolean",
          "description" : "The fee will be deducted from the amount being sent. The recipient will receive less syscoins than you enter in the amount field.",
          "default" : false
        },
        "use_is" : {
          "type" : "boolean",
          "description" : "Send this transaction as InstantSend (default: false)",
          "default" : false
        },
        "use_ps" : {
          "type" : "boolean",
          "description" : "Use anonymized funds only (default: false)",
          "default" : false
        }
      },
      "example" : {
        "use_ps" : false,
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "syscoinaddress" : "syscoinaddress",
        "use_is" : false,
        "commentto" : "commentto",
        "comment" : "comment",
        "subtractfeefromamount" : false
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
      },
      "example" : {
        "syscoinaddress" : "syscoinaddress",
        "message" : "message"
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
      },
      "example" : {
        "passphrase" : "passphrase",
        "timeout" : 0.80082819046101150206595775671303272247314453125
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
      },
      "example" : {
        "oldpassphrase" : "oldpassphrase",
        "newpassphrase" : "newpassphrase"
      }
    },
    "MultiSignatureInfo" : {
      "required" : [ "redeemscript", "reqsigners", "reqsigs" ],
      "properties" : {
        "reqsigs" : {
          "type" : "number"
        },
        "reqsigners" : {
          "type" : "string"
        },
        "redeemscript" : {
          "type" : "string"
        }
      }
    },
    "EscrowFeedbackRequest" : {
      "required" : [ "escrowguid", "feedback", "rating", "userfrom", "userto" ],
      "properties" : {
        "escrowguid" : {
          "type" : "string",
          "description" : "Escrow ID"
        },
        "userfrom" : {
          "type" : "string",
          "description" : "Your role ('buyer', 'seller', 'reseller', or 'arbiter')"
        },
        "feedback" : {
          "type" : "string",
          "description" : "Feedback description"
        },
        "rating" : {
          "type" : "integer",
          "description" : "Ratings are numbers from 1 to 5"
        },
        "userto" : {
          "type" : "string",
          "description" : "His role ('buyer', 'seller', 'reseller', or 'arbiter')"
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "feedback" : "feedback",
        "witness" : "witness",
        "userfrom" : "userfrom",
        "escrowguid" : "escrowguid",
        "rating" : 0,
        "userto" : "userto"
      }
    },
    "GenerateEscrowMultisigRequest" : {
      "required" : [ "arbiter", "buyer", "offerguid", "quantity" ],
      "properties" : {
        "buyer" : {
          "type" : "string"
        },
        "offerguid" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "number"
        },
        "arbiter" : {
          "type" : "string"
        },
        "paymentoption" : {
          "type" : "string"
        }
      },
      "example" : {
        "arbiter" : "arbiter",
        "quantity" : 0.80082819046101150206595775671303272247314453125,
        "offerguid" : "offerguid",
        "paymentoption" : "paymentoption",
        "buyer" : "buyer"
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
        "message" : "message",
        "token" : "token"
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
          "description" : "?The nonce"
        },
        "bits" : {
          "type" : "string",
          "description" : "The bits"
        },
        "difficulty" : {
          "type" : "number",
          "description" : "?The difficulty"
        },
        "chainwork" : {
          "type" : "string",
          "description" : "?Expected number of hashes required to produce the chain up to this block (in hex)"
        },
        "previousblockhash" : {
          "type" : "string",
          "description" : "?The hash of the previous block"
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
        "tx" : [ "tx", "tx" ],
        "mediantime" : 9.301444243932575517419536481611430644989013671875,
        "data" : "data",
        "previousblockhash" : "previousblockhash",
        "bits" : "bits",
        "weight" : 5.962133916683182377482808078639209270477294921875,
        "versionHex" : "versionHex",
        "confirmations" : 0.80082819046101150206595775671303272247314453125,
        "version" : 2.3021358869347654518833223846741020679473876953125,
        "nonce" : 3.61607674925191080461672754609026014804840087890625,
        "nextblockhash" : "nextblockhash",
        "difficulty" : 2.027123023002321833274663731572218239307403564453125,
        "chainwork" : "chainwork",
        "size" : 6.02745618307040320615897144307382404804229736328125,
        "merkleroot" : "merkleroot",
        "strippedsize" : 1.46581298050294517310021547018550336360931396484375,
        "time" : 7.061401241503109105224211816675961017608642578125,
        "hash" : "hash",
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
        "chain" : "chain",
        "chainwork" : "chainwork",
        "mediantime" : 5.962133916683182377482808078639209270477294921875,
        "verificationprogress" : 5.63737665663332876420099637471139430999755859375,
        "blocks" : 0.80082819046101150206595775671303272247314453125,
        "pruned" : true,
        "softforks" : [ "{}", "{}" ],
        "pruneheight" : 2.3021358869347654518833223846741020679473876953125,
        "bestblockhash" : "bestblockhash"
      }
    },
    "EncryptWalletRequest" : {
      "required" : [ "passphrase" ],
      "properties" : {
        "passphrase" : {
          "type" : "string",
          "description" : "The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long."
        }
      },
      "example" : {
        "passphrase" : "passphrase"
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
        "localaddresses" : [ "localaddresses", "localaddresses" ],
        "protocolversion" : 6.02745618307040320615897144307382404804229736328125,
        "relayfee" : 5.63737665663332876420099637471139430999755859375,
        "subversion" : "subversion",
        "timeoffset" : 1.46581298050294517310021547018550336360931396484375,
        "warnings" : "warnings",
        "localrelay" : true,
        "networks" : [ {
          "proxy" : "proxy",
          "limited" : true,
          "proxy_randomize_credentials" : true,
          "name" : "name",
          "reachable" : true
        }, {
          "proxy" : "proxy",
          "limited" : true,
          "proxy_randomize_credentials" : true,
          "name" : "name",
          "reachable" : true
        } ],
        "version" : 0.80082819046101150206595775671303272247314453125,
        "connections" : 5.962133916683182377482808078639209270477294921875,
        "localservices" : "localservices"
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
        "proxy" : "proxy",
        "limited" : true,
        "proxy_randomize_credentials" : true,
        "name" : "name",
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
        "alias" : "alias",
        "discount_percentage" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "ListReceivedByAddress" : {
      "properties" : {
        "address" : {
          "type" : "string"
        },
        "v2address" : {
          "type" : "string"
        },
        "account" : {
          "type" : "string"
        },
        "amount" : {
          "type" : "number"
        },
        "confirmations" : {
          "type" : "number"
        },
        "label" : {
          "type" : "string"
        },
        "txids" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        },
        "ismine" : {
          "type" : "boolean"
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "address" : "address",
        "v2address" : "v2address",
        "ismine" : true,
        "label" : "label",
        "confirmations" : 6.02745618307040320615897144307382404804229736328125,
        "account" : "account",
        "txids" : [ "txids", "txids" ]
      }
    },
    "SyscoinAddressEntry" : {
      "properties" : {
        "address" : {
          "type" : "string"
        },
        "balance" : {
          "type" : "number"
        },
        "label" : {
          "type" : "string"
        },
        "alias" : {
          "type" : "string"
        }
      },
      "example" : {
        "address" : "address",
        "balance" : 0.80082819046101150206595775671303272247314453125,
        "alias" : "alias",
        "label" : "label"
      }
    },
    "GetChainTipsResponse" : {
      "properties" : {
        "height" : {
          "type" : "number"
        },
        "hash" : {
          "type" : "string"
        },
        "difficulty" : {
          "type" : "number"
        },
        "chainwork" : {
          "type" : "string"
        },
        "branchlen" : {
          "type" : "number"
        },
        "status" : {
          "type" : "string"
        }
      },
      "example" : {
        "difficulty" : 6.02745618307040320615897144307382404804229736328125,
        "chainwork" : "chainwork",
        "branchlen" : 1.46581298050294517310021547018550336360931396484375,
        "hash" : "hash",
        "height" : 0.80082819046101150206595775671303272247314453125,
        "status" : "status"
      }
    },
    "GetSpentInfoResponse" : {
      "properties" : {
        "txid" : {
          "type" : "string"
        },
        "index" : {
          "type" : "number"
        }
      },
      "example" : {
        "txid" : "txid",
        "index" : 0.80082819046101150206595775671303272247314453125
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
        "mixing_mode" : "mixing_mode",
        "entries" : 6.02745618307040320615897144307382404804229736328125,
        "warnings" : "warnings",
        "state" : "state",
        "addr" : "addr",
        "queue" : 0.80082819046101150206595775671303272247314453125,
        "outpoint" : "outpoint",
        "status" : "status",
        "keys_left" : "keys_left"
      }
    },
    "DumpHdInfoResponse" : {
      "properties" : {
        "hdseed" : {
          "type" : "string"
        },
        "mnemonic" : {
          "type" : "string"
        },
        "mnemonicpassphrase" : {
          "type" : "string"
        }
      },
      "example" : {
        "hdseed" : "hdseed",
        "mnemonicpassphrase" : "mnemonicpassphrase",
        "mnemonic" : "mnemonic"
      }
    },
    "Asset" : {
      "required" : [ "guid" ],
      "properties" : {
        "guid" : {
          "type" : "string"
        },
        "symbol" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
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
        "balance" : {
          "type" : "number"
        },
        "total_supply" : {
          "type" : "number"
        },
        "max_supply" : {
          "type" : "number"
        },
        "interest_rate" : {
          "type" : "number"
        },
        "can_adjust_interest_rate" : {
          "type" : "boolean"
        },
        "use_input_ranges" : {
          "type" : "boolean"
        },
        "inputs" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/AssetInput"
          }
        },
        "precision" : {
          "type" : "number"
        }
      },
      "example" : {
        "symbol" : "symbol",
        "can_adjust_interest_rate" : true,
        "total_supply" : 5.962133916683182377482808078639209270477294921875,
        "inputs" : [ {
          "start" : 6.02745618307040320615897144307382404804229736328125,
          "end" : 1.46581298050294517310021547018550336360931396484375
        }, {
          "start" : 6.02745618307040320615897144307382404804229736328125,
          "end" : 1.46581298050294517310021547018550336360931396484375
        } ],
        "precision" : 7.061401241503109105224211816675961017608642578125,
        "txid" : "txid",
        "publicvalue" : "publicvalue",
        "use_input_ranges" : true,
        "balance" : 1.46581298050294517310021547018550336360931396484375,
        "max_supply" : 5.63737665663332876420099637471139430999755859375,
        "guid" : "guid",
        "alias" : "alias",
        "interest_rate" : 2.3021358869347654518833223846741020679473876953125,
        "time" : 6.02745618307040320615897144307382404804229736328125,
        "category" : "category",
        "height" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "AssetInput" : {
      "properties" : {
        "start" : {
          "type" : "number"
        },
        "end" : {
          "type" : "number"
        }
      },
      "example" : {
        "start" : 6.02745618307040320615897144307382404804229736328125,
        "end" : 1.46581298050294517310021547018550336360931396484375
      }
    },
    "AssetSendRequest" : {
      "required" : [ "aliasfrom", "amounts", "asset" ],
      "properties" : {
        "asset" : {
          "type" : "string",
          "description" : "Asset guid."
        },
        "aliasfrom" : {
          "type" : "string",
          "description" : "Alias to transfer from."
        },
        "amounts" : {
          "type" : "array",
          "description" : "A json object with aliases and amounts { \"aliasto\":amount   alias to amounts mapping, can be multiple mappings OR if using inputranges \"aliasto\":\"aliasname\" alias to range mappings, can be multiple ranges and multiple mappings \"ranges\": \"start\":index \"end\":index }",
          "items" : {
            "$ref" : "#/definitions/AssetAmount"
          }
        },
        "memo" : {
          "type" : "string",
          "description" : "Message to include in this asset allocation transfer."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "amounts" : [ {
          "amount" : 0.80082819046101150206595775671303272247314453125,
          "ranges" : [ {
            "start" : 6.02745618307040320615897144307382404804229736328125,
            "end" : 1.46581298050294517310021547018550336360931396484375
          }, {
            "start" : 6.02745618307040320615897144307382404804229736328125,
            "end" : 1.46581298050294517310021547018550336360931396484375
          } ],
          "aliasto" : "aliasto"
        }, {
          "amount" : 0.80082819046101150206595775671303272247314453125,
          "ranges" : [ {
            "start" : 6.02745618307040320615897144307382404804229736328125,
            "end" : 1.46581298050294517310021547018550336360931396484375
          }, {
            "start" : 6.02745618307040320615897144307382404804229736328125,
            "end" : 1.46581298050294517310021547018550336360931396484375
          } ],
          "aliasto" : "aliasto"
        } ],
        "memo" : "memo",
        "asset" : "asset",
        "aliasfrom" : "aliasfrom"
      }
    },
    "AssetAmount" : {
      "required" : [ "aliasto" ],
      "properties" : {
        "aliasto" : {
          "type" : "string",
          "description" : "alias to send to"
        },
        "amount" : {
          "type" : "number",
          "description" : "amount you want to send"
        },
        "ranges" : {
          "type" : "array",
          "description" : "[{'start':index,'end':index},...]},...]",
          "items" : {
            "$ref" : "#/definitions/AssetInput"
          }
        }
      },
      "example" : {
        "amount" : 0.80082819046101150206595775671303272247314453125,
        "ranges" : [ {
          "start" : 6.02745618307040320615897144307382404804229736328125,
          "end" : 1.46581298050294517310021547018550336360931396484375
        }, {
          "start" : 6.02745618307040320615897144307382404804229736328125,
          "end" : 1.46581298050294517310021547018550336360931396484375
        } ],
        "aliasto" : "aliasto"
      }
    },
    "AssetAllocation" : {
      "required" : [ "_id" ],
      "discriminator" : "_id",
      "properties" : {
        "_id" : {
          "type" : "string"
        },
        "asset" : {
          "type" : "string"
        },
        "txid" : {
          "type" : "string"
        },
        "height" : {
          "type" : "number"
        },
        "alias" : {
          "type" : "string"
        },
        "balance" : {
          "type" : "number"
        },
        "interest_claim_height" : {
          "type" : "number"
        },
        "memo" : {
          "type" : "string"
        },
        "inputs" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/AssetInput"
          }
        },
        "accumulated_interest" : {
          "type" : "number"
        }
      },
      "example" : {
        "balance" : 6.02745618307040320615897144307382404804229736328125,
        "inputs" : [ {
          "start" : 6.02745618307040320615897144307382404804229736328125,
          "end" : 1.46581298050294517310021547018550336360931396484375
        }, {
          "start" : 6.02745618307040320615897144307382404804229736328125,
          "end" : 1.46581298050294517310021547018550336360931396484375
        } ],
        "txid" : "txid",
        "alias" : "alias",
        "interest_claim_height" : 1.46581298050294517310021547018550336360931396484375,
        "memo" : "memo",
        "_id" : "_id",
        "asset" : "asset",
        "accumulated_interest" : 5.962133916683182377482808078639209270477294921875,
        "height" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "AssetAllocationSenderStatus" : {
      "properties" : {
        "status" : {
          "type" : "number",
          "description" : "Level -1 means not found, not a ZDAG transaction, perhaps it is already confirmed. Level 0 means OK. Level 1 means warning (checked that in the mempool there are more spending balances than current POW sender balance). An active stance should be taken and perhaps a deeper analysis as to potential conflicts related to the sender. Level 2 means an active double spend was found and any depending asset allocation sends are also flagged as dangerous and should wait for POW confirmation before proceeding."
        }
      },
      "example" : {
        "status" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "AssetTransferRequest" : {
      "required" : [ "alias", "asset" ],
      "properties" : {
        "asset" : {
          "type" : "string",
          "description" : "Asset guid."
        },
        "alias" : {
          "type" : "string",
          "description" : "Alias to transfer this asset to."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "alias" : "alias",
        "asset" : "asset"
      }
    },
    "AssetUpdateRequest" : {
      "properties" : {
        "asset" : {
          "type" : "string",
          "description" : "Asset guid."
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "Public data, 512 characters max."
        },
        "category" : {
          "type" : "string",
          "description" : "Set to assets"
        },
        "supply" : {
          "type" : "number",
          "description" : "New supply of asset. Can mint more supply up to total_supply amount or if max_supply is -1 then minting is uncapped."
        },
        "interest_rate" : {
          "type" : "number",
          "description" : "The annual interest rate if any. Money supply is still capped to total supply. Should be between 0 and 1 and represents a percentage divided by 100. Can only set if this asset allows adjustment of interest rate."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "witness" : "witness",
        "publicvalue" : "publicvalue",
        "interest_rate" : 6.02745618307040320615897144307382404804229736328125,
        "asset" : "asset",
        "category" : "category",
        "supply" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "AssetNewRequest" : {
      "properties" : {
        "symbol" : {
          "type" : "string",
          "description" : "name, 20 characters max."
        },
        "alias" : {
          "type" : "string",
          "description" : "An alias you own."
        },
        "publicvalue" : {
          "type" : "string",
          "description" : "Public data, 256 characters max."
        },
        "category" : {
          "type" : "string",
          "description" : "Category, 256 characters max. Defaults to assets."
        },
        "precision" : {
          "type" : "number",
          "description" : "Precision of balances. Must be between 0 and 8. The lower it is the higher possible max_supply is available since the supply is represented as a 64 bit integer. With a precision of 8 the max supply is 10 billion."
        },
        "supply" : {
          "type" : "number",
          "description" : "Initial supply of asset. Can mint more supply up to total_supply amount or if total_supply is -1 then minting is uncapped."
        },
        "max_supply" : {
          "type" : "number",
          "description" : "Maximum supply of this asset. Set to -1 for uncapped."
        },
        "use_inputranges" : {
          "type" : "boolean",
          "description" : "If this asset uses an input for every token, useful if you need to keep track of a token regardless of ownership."
        },
        "interest_rate" : {
          "type" : "number",
          "description" : "The annual interest rate if any. Money supply is still capped to total supply. Should be between 0 and 1 and represents a percentage divided by 100."
        },
        "can_adjust_interest_rate" : {
          "type" : "boolean",
          "description" : "Ability to adjust interest rate through assetupdate in the future."
        },
        "witness" : {
          "type" : "string",
          "description" : "Witness alias name that will sign for web-of-trust notarization of this transaction."
        }
      },
      "example" : {
        "symbol" : "symbol",
        "witness" : "witness",
        "publicvalue" : "publicvalue",
        "can_adjust_interest_rate" : true,
        "precision" : 0.80082819046101150206595775671303272247314453125,
        "max_supply" : 1.46581298050294517310021547018550336360931396484375,
        "alias" : "alias",
        "interest_rate" : 5.962133916683182377482808078639209270477294921875,
        "use_inputranges" : true,
        "category" : "category",
        "supply" : 6.02745618307040320615897144307382404804229736328125
      }
    },
    "FundRawTransactionRequest" : {
      "properties" : {
        "hexstring" : {
          "type" : "string"
        },
        "watching" : {
          "type" : "boolean"
        }
      },
      "example" : {
        "hexstring" : "hexstring",
        "watching" : true
      }
    },
    "SignRawTransactionRequest" : {
      "properties" : {
        "hexstring" : {
          "type" : "string"
        }
      },
      "example" : {
        "hexstring" : "hexstring"
      }
    },
    "LockUnspentRequest" : {
      "properties" : {
        "unlock" : {
          "type" : "boolean"
        },
        "transactions" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/LockUnspentTransaction"
          }
        }
      },
      "example" : {
        "unlock" : true,
        "transactions" : [ {
          "txid" : "txid",
          "vout" : 0.80082819046101150206595775671303272247314453125
        }, {
          "txid" : "txid",
          "vout" : 0.80082819046101150206595775671303272247314453125
        } ]
      }
    },
    "LockUnspentTransaction" : {
      "properties" : {
        "txid" : {
          "type" : "string"
        },
        "vout" : {
          "type" : "number"
        }
      },
      "example" : {
        "txid" : "txid",
        "vout" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "OfferNewRequest" : {
      "properties" : {
        "alias" : {
          "type" : "string"
        },
        "category" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "number"
        },
        "price" : {
          "type" : "number"
        },
        "description" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "cert_guid" : {
          "type" : "string"
        },
        "payment_options" : {
          "type" : "string"
        },
        "private" : {
          "type" : "boolean"
        },
        "units" : {
          "type" : "number"
        },
        "offertype" : {
          "type" : "string"
        },
        "auction_expires" : {
          "type" : "number"
        },
        "auction_reserve" : {
          "type" : "number"
        },
        "auction_require_witness" : {
          "type" : "boolean"
        },
        "auction_deposit" : {
          "type" : "number"
        },
        "witness" : {
          "type" : "string"
        }
      },
      "example" : {
        "offertype" : "offertype",
        "private" : true,
        "quantity" : 0.80082819046101150206595775671303272247314453125,
        "auction_expires" : 5.962133916683182377482808078639209270477294921875,
        "description" : "description",
        "units" : 1.46581298050294517310021547018550336360931396484375,
        "auction_reserve" : 5.63737665663332876420099637471139430999755859375,
        "title" : "title",
        "auction_deposit" : 2.3021358869347654518833223846741020679473876953125,
        "witness" : "witness",
        "cert_guid" : "cert_guid",
        "price" : 6.02745618307040320615897144307382404804229736328125,
        "alias" : "alias",
        "currency" : "currency",
        "category" : "category",
        "auction_require_witness" : true,
        "payment_options" : "payment_options"
      }
    },
    "OfferUpdateRequest" : {
      "properties" : {
        "alias" : {
          "type" : "string"
        },
        "guid" : {
          "type" : "string"
        },
        "category" : {
          "type" : "string"
        },
        "title" : {
          "type" : "string"
        },
        "quantity" : {
          "type" : "number"
        },
        "price" : {
          "type" : "number"
        },
        "description" : {
          "type" : "string"
        },
        "currency" : {
          "type" : "string"
        },
        "private" : {
          "type" : "boolean"
        },
        "cert_guid" : {
          "type" : "string"
        },
        "commission" : {
          "type" : "number"
        },
        "payment_options" : {
          "type" : "string"
        },
        "offer_type" : {
          "type" : "string"
        },
        "auction_expires" : {
          "type" : "number"
        },
        "auction_reserve" : {
          "type" : "number"
        },
        "auction_require_witness" : {
          "type" : "boolean"
        },
        "auction_deposit" : {
          "type" : "number"
        },
        "witness" : {
          "type" : "string"
        }
      },
      "example" : {
        "private" : true,
        "quantity" : 0.80082819046101150206595775671303272247314453125,
        "auction_expires" : 5.962133916683182377482808078639209270477294921875,
        "description" : "description",
        "auction_reserve" : 5.63737665663332876420099637471139430999755859375,
        "title" : "title",
        "auction_deposit" : 2.3021358869347654518833223846741020679473876953125,
        "witness" : "witness",
        "cert_guid" : "cert_guid",
        "price" : 6.02745618307040320615897144307382404804229736328125,
        "alias" : "alias",
        "guid" : "guid",
        "currency" : "currency",
        "commission" : 1.46581298050294517310021547018550336360931396484375,
        "category" : "category",
        "offer_type" : "offer_type",
        "auction_require_witness" : true,
        "payment_options" : "payment_options"
      }
    },
    "EscrowCreateRawTransactionDataRequest" : {
      "properties" : {
        "txid" : {
          "type" : "string"
        },
        "vout" : {
          "type" : "number"
        },
        "satoshis" : {
          "type" : "number"
        }
      },
      "example" : {
        "txid" : "txid",
        "vout" : 0.80082819046101150206595775671303272247314453125,
        "satoshis" : 6.02745618307040320615897144307382404804229736328125
      }
    },
    "EscrowBidResponse" : {
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
          "type" : "number"
        },
        "bid_in_payment_option_per_unit" : {
          "type" : "number"
        },
        "witness" : {
          "type" : "string"
        },
        "status" : {
          "type" : "string"
        }
      },
      "example" : {
        "offer" : "offer",
        "bid_in_payment_option_per_unit" : 1.46581298050294517310021547018550336360931396484375,
        "witness" : "witness",
        "bidder" : "bidder",
        "escrow" : "escrow",
        "_id" : "_id",
        "bid_in_offer_currency_per_unit" : 6.02745618307040320615897144307382404804229736328125,
        "height" : 0.80082819046101150206595775671303272247314453125,
        "status" : "status"
      }
    },
    "EscrowFeedbackResponse" : {
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
          "type" : "number"
        },
        "time" : {
          "type" : "number"
        },
        "rating" : {
          "type" : "number"
        },
        "feedbackuserfrom" : {
          "type" : "number"
        },
        "feedbackuserto" : {
          "type" : "number"
        },
        "feedback" : {
          "type" : "string"
        }
      },
      "example" : {
        "offer" : "offer",
        "feedback" : "feedback",
        "feedbackuserfrom" : 5.962133916683182377482808078639209270477294921875,
        "rating" : 1.46581298050294517310021547018550336360931396484375,
        "escrow" : "escrow",
        "txid" : 0.80082819046101150206595775671303272247314453125,
        "feedbackuserto" : 5.63737665663332876420099637471139430999755859375,
        "_id" : "_id",
        "time" : 6.02745618307040320615897144307382404804229736328125
      }
    },
    "AliasNewFundRequest" : {
      "properties" : {
        "hexstring" : {
          "type" : "string"
        },
        "addresses" : {
          "type" : "array",
          "items" : {
            "type" : "object",
            "properties" : { }
          }
        }
      },
      "example" : {
        "addresses" : [ "{}", "{}" ],
        "hexstring" : "hexstring"
      }
    },
    "GetAddressUTXOsRequest" : {
      "properties" : {
        "addresses" : {
          "type" : "array",
          "items" : {
            "type" : "string"
          }
        }
      },
      "example" : {
        "addresses" : [ "addresses", "addresses" ]
      }
    },
    "SignRawTransactionResponse" : {
      "properties" : {
        "hex" : {
          "type" : "string"
        },
        "complete" : {
          "type" : "boolean"
        },
        "errors" : {
          "type" : "array",
          "items" : {
            "$ref" : "#/definitions/SignRawTransactionError"
          }
        }
      },
      "example" : {
        "hex" : "hex",
        "complete" : true,
        "errors" : [ {
          "sequence" : 6.02745618307040320615897144307382404804229736328125,
          "scriptSig" : "scriptSig",
          "txid" : "txid",
          "error" : "error",
          "vout" : 0.80082819046101150206595775671303272247314453125
        }, {
          "sequence" : 6.02745618307040320615897144307382404804229736328125,
          "scriptSig" : "scriptSig",
          "txid" : "txid",
          "error" : "error",
          "vout" : 0.80082819046101150206595775671303272247314453125
        } ]
      }
    },
    "SignRawTransactionError" : {
      "properties" : {
        "txid" : {
          "type" : "string"
        },
        "vout" : {
          "type" : "number"
        },
        "scriptSig" : {
          "type" : "string"
        },
        "sequence" : {
          "type" : "number"
        },
        "error" : {
          "type" : "string"
        }
      },
      "example" : {
        "sequence" : 6.02745618307040320615897144307382404804229736328125,
        "scriptSig" : "scriptSig",
        "txid" : "txid",
        "error" : "error",
        "vout" : 0.80082819046101150206595775671303272247314453125
      }
    },
    "SendRawTransactionResponse" : {
      "properties" : {
        "txid" : {
          "type" : "string"
        }
      },
      "example" : {
        "txid" : "txid"
      }
    }
  }
}