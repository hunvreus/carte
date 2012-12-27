---
path: '/stuff'
title: 'Post a thing'
type: 'POST'

layout: nil
---

This method allows users to crate a new thing.

### Request

Expects a fully formed thing object.

```Authentication: bearer TOKEN```

```{
    name: 'My new thing'
}```

### Response

**If succeeds**, returns the created thing.

```Status: 201 Created```

```{
    id: new_thing,
    name: 'My new thing'
}```

ERROR