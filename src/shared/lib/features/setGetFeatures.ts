import { FeatureFlags } from '@/shared/types/featureFlags'

//ФИЧИ В ХОДЕ СЕССИИ НЕ МЕНЯЮТСЯ, ИХ НЕ ОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featureFlags: FeatureFlags

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  return featureFlags && featureFlags[flag]
}
