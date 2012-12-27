---
path: '/stuff/:id'
title: 'Delete a thing'
type: 'DELETE'
parameters:
- name: 'id'
  description: 'the id of the thing to delete.'

layout: nil
---

This method allows the user to post a new thing to his stuff.

### Request

* Authentication is required.
* The body is omitted.

### Response

Sends back a collection of things.

```Status: 200 Deleted```

```{
    code: 200,
    message: 'Your thing (id: 736) was deleted'
}```