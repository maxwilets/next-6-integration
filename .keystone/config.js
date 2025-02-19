"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// schema.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_cloudinary = require("@keystone-6/cloudinary");
var import_config = require("dotenv/config");
var import_fields = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");
var lists = {
  User: (0, import_core.list)({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: import_access.allowAll,
    // this is the fields for our User list
    fields: {
      // by adding isRequired, we enforce that every User should have a name
      //   if no name is provided, an error will be displayed
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)({
        validation: { isRequired: true },
        // by adding isIndexed: 'unique', we're saying that no user can have the same
        // email as another user - this may or may not be a good idea for your project
        isIndexed: "unique"
      }),
      password: (0, import_fields.password)({ validation: { isRequired: true } }),
      // we can use this field to see what Posts this User has authored
      //   more on that in the Post list below
      posts: (0, import_fields.relationship)({ ref: "Post.author", many: true }),
      createdAt: (0, import_fields.timestamp)({
        // this sets the timestamp to Date.now() when the user is first created
        defaultValue: { kind: "now" }
      })
    }
  }),
  Resume: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      title: (0, import_fields.text)({ validation: { isRequired: true } }),
      company: (0, import_fields.text)({ validation: { isRequired: true } }),
      date: (0, import_fields.text)({ validation: { isRequired: true } }),
      startYear: (0, import_fields.integer)(),
      endYear: (0, import_fields.integer)(),
      role1: (0, import_fields.text)({ ui: { displayMode: "textarea" } }),
      role2: (0, import_fields.text)({ ui: { displayMode: "textarea" } }),
      role3: (0, import_fields.text)({ ui: { displayMode: "textarea" } }),
      role4: (0, import_fields.text)({ ui: { displayMode: "textarea" } }),
      role5: (0, import_fields.text)({ ui: { displayMode: "textarea" } })
    }
  }),
  Skill: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      skillName: (0, import_fields.text)({ validation: { isRequired: true } }),
      level: (0, import_fields.integer)()
    }
  }),
  Coursework: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      course: (0, import_fields.text)({ validation: { isRequired: true } }),
      description: (0, import_fields.text)({ validation: { isRequired: true } }),
      author: (0, import_fields.text)(),
      link: (0, import_fields.text)(),
      photo: (0, import_fields.relationship)({
        ref: "Photo.coursePhoto",
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] }
        }
      })
    }
  }),
  Education: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      title: (0, import_fields.text)({ validation: { isRequired: true } }),
      location: (0, import_fields.text)({ validation: { isRequired: true } }),
      time: (0, import_fields.text)({ validation: { isRequired: true } }),
      photo: (0, import_fields.relationship)({
        ref: "Photo.educationPhoto",
        many: true,
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] }
        }
      })
    }
  }),
  Portfolio: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      title: (0, import_fields.text)({ validation: { isRequired: true } }),
      p1: (0, import_fields.text)({
        db: { nativeType: "VarChar(500)" },
        ui: { displayMode: "textarea" }
      }),
      p2: (0, import_fields.text)({
        db: { nativeType: "VarChar(500)" },
        ui: { displayMode: "textarea" }
      }),
      p3: (0, import_fields.text)({
        db: { nativeType: "VarChar(500)" },
        ui: { displayMode: "textarea" }
      }),
      repo: (0, import_fields.text)(),
      liveSite: (0, import_fields.text)(),
      photo: (0, import_fields.relationship)({
        ref: "Photo.portfolioPhoto",
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] }
        }
      }),
      technology: (0, import_fields.relationship)({
        many: true,
        ref: "Technology.portfolio",
        ui: {
          displayMode: "cards",
          cardFields: ["name", "typeLink"]
        }
      })
    }
  }),
  Technology: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)(),
      typeLink: (0, import_fields.text)(),
      portfolio: (0, import_fields.relationship)({
        ref: "Portfolio.technology",
        many: true
      })
    }
  }),
  Photo: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      image: (0, import_cloudinary.cloudinaryImage)({
        cloudinary: {
          cloudName: `${process.env.CLOUDINARY_CLOUD_NAME}`,
          apiKey: `${process.env.CLOUDINARY_API_KEY}`,
          apiSecret: `${process.env.CLOUDINARY_API_SECRET}`
        }
      }),
      altText: (0, import_fields.text)(),
      portfolioPhoto: (0, import_fields.relationship)({
        ref: "Portfolio.photo"
      }),
      educationPhoto: (0, import_fields.relationship)({
        ref: "Education.photo",
        many: true
      }),
      coursePhoto: (0, import_fields.relationship)({
        ref: "Coursework.photo"
      })
    }
  }),
  Post: (0, import_core.list)({
    access: import_access.allowAll,
    // this is the fields for our Post list
    fields: {
      title: (0, import_fields.text)({ validation: { isRequired: true } }),
      summary: (0, import_fields.text)({
        db: { nativeType: "VarChar(500)" },
        ui: { displayMode: "textarea" }
      }),
      slug: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: true
      }),
      date: (0, import_fields.text)(),
      // the document field can be used for making rich editable content
      //   you can find out more at https://keystonejs.com/docs/guides/document-fields
      content: (0, import_fields_document.document)({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1]
        ],
        links: true,
        dividers: true
      }),
      // with this field, you can set a User as the author for a Post
      author: (0, import_fields.relationship)({
        // we could have used 'User', but then the relationship would only be 1-way
        ref: "User.posts",
        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: "cards",
          cardFields: ["name", "email"],
          inlineEdit: { fields: ["name", "email"] },
          linkToItem: true,
          inlineConnect: true
        },
        // a Post can only have one author
        //   this is the default, but we show it here for verbosity
        many: false
      }),
      // with this field, you can add some Tags to Posts
      tags: (0, import_fields.relationship)({
        // we could have used 'Tag', but then the relationship would only be 1-way
        ref: "Tag.posts",
        // a Post can have many Tags, not just one
        many: true,
        // this is some customisations for changing how this will look in the AdminUI
        ui: {
          displayMode: "cards",
          cardFields: ["name"],
          inlineEdit: { fields: ["name"] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["name"] }
        }
      })
    }
  }),
  // this last list is our Tag list, it only has a name field for now
  Tag: (0, import_core.list)({
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: import_access.allowAll,
    // setting this to isHidden for the user interface prevents this list being visible in the Admin UI
    ui: {
      isHidden: true
    },
    // this is the fields for our Tag list
    fields: {
      name: (0, import_fields.text)(),
      // this can be helpful to find out all the Posts associated with a Tag
      posts: (0, import_fields.relationship)({ ref: "Post.tags", many: true })
    }
  })
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name createdAt",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core2.config)({
    secureCookies: false,
    server: {
      cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true
      }
    },
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "mysql",
      url: process.env.DATABASE_URL,
      useMigrations: true
    },
    ui: {
      isAccessAllowed: () => true
    },
    lists,
    session
  })
);
