import tigerFactory, {
  TigerTokenAuthProvider,
} from "@gooddata/sdk-backend-tiger";

const backend = tigerFactory({
  hostname: process.env.NEXT_PUBLIC_GD_HOSTNAME,
})
  .onHostname(process.env.NEXT_PUBLIC_GD_HOSTNAME!)
  .withAuthentication(
    new TigerTokenAuthProvider(process.env.NEXT_PUBLIC_GD_API_TOKEN!)
  );

export default backend;
