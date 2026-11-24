import { registerWebModule, NativeModule } from 'expo';

// BhemuUpdaterModule is not available on the web platform.
class BhemuUpdaterModule extends NativeModule<Record<string, never>> {}

export default registerWebModule(BhemuUpdaterModule, 'BhemuUpdaterModule');
