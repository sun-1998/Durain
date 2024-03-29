package com.xxn;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import com.melihyarikkaya.rnserialport.RNSerialportPackage;
import com.wix.RNCameraKit.RNCameraKitPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import org.pgsqlite.SQLitePluginPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativeYouTube(),
            new RNSerialportPackage(),
            new RNCameraKitPackage(),
              new SQLitePluginPackage(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
