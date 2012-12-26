---
path: '/stuff'
title: 'Post a thing'
type: 'GET'
layout: post
---

This method allows the user to post a new thing to his stuff.

### Request

#### Body

    {
        id: thing_2,
        name: 'My second thing'
    }

### Response

Sends back a collection of things.

#### Header

    Status: 201 Success

#### Body

    {
        {
            id: thing_1,
            name: 'My first thing'
        },
        {
            id: thing_2,
            name: 'My second thing'
        }
    }
