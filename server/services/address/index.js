const addressSchema = require( './address.schema.json' );
const validate = require( '../../utils/validate' );
const { serialize, deserialize } = require( '../../utils/message-pack' );
const uuid = require( 'uuid' ).v4;

const redis = require( '../../singletons/redis' );
const ADDRESSES = 'addresses';

// eslint-disable-next-line
const log = console.log;

module.exports = {
  async add( address ) {
    const id = 'addr_' + uuid();

    log( 'creating', id );

    const withId = {
      ...address,
      id,
    };
    console.log('withID', withId)
    validate( addressSchema, withId );

    await redis.HSET( ADDRESSES, withId.id, serialize( withId ) );

    return withId;
  },

  async update( address ) {
    log( 'updating', address.id );

    validate( addressSchema, address);

    await redis.HSET( ADDRESSES, address.id, serialize( address) );
  },

  async delete( id ) {
    log( 'deleting', id );

    await redis.HDEL( ADDRESSES, id );
  },

  async get( id ) {
    log( 'getting', id );

    const res = await redis.HGET( ADDRESSES, id );
    if ( !res ) return;
    return deserialize( res );
  },

  async search( searchString = '' ) {
    log( 'searching', searchString );

    // hint for the interview: Why won't this work in production?

    const addresses = await redis.HGETALL( ADDRESSES );

    if(!addresses) return [];

    return Object.values( addresses )
      .map( ( buffer ) => deserialize( buffer ) )
      // turn the addresses into a flat string
      .filter( ( address ) => {
        const searchable = Object.values( address ).join( ' ' ).toLowerCase();
        return searchable.includes( searchString.toLowerCase() );
      });
  },
};
