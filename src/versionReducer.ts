export default function versionReducer(state: any, action: any) {
  switch (action.type) {
    case 'CHANGE_VERSION': {
      return action.version
    }
    default: {
      return state
    }
  }
}
