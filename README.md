# Set NPM Token GitHub Action

GitHub Action to create a .npmrc file with your NPM token inside it so that you install dependencies from private NPM organizations, or publish your packages from GitHub Actions.

## Inputs

### `token`

**required** your npm token

## Example usage

```yaml
uses: filipstefansson/set-npm-token-action@v1
with:
  token: ${{ secrets.NPM_TOKEN }}
```
