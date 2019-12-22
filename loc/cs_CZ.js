module.exports = {
  _: {
    storage_is_encrypted: 'Vaše úložiště je zašifrované. Zadejte heslo k odemčení',
    enter_password: 'Zadejte heslo',
    bad_password: 'Špatné heslo, prosím zkuste to znovu',
    never: 'nikdy',
    continue: 'Continue',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Vyberte peněženku',
    options: 'možnosti',
    createBitcoinWallet: 'In order to use a Lightning wallet, a Bitcoin wallet is needed to fund it. Would you like to continue anyway?',
    list: {
      app_name: 'BlueWallet',
      title: 'peněženky',
      header: 'Peněženka reprezentuje pár tajného (privátního) klíče a adresy' + 'kterou můžete sdílet, abyste získali mince',
      add: 'Přidat peněženku',
      create_a_wallet: 'Vytvořit peněženku',
      create_a_wallet1: 'Je to zdarma a můžete vytvořit',
      create_a_wallet2: 'tolik, kolik budete chtít',
      latest_transaction: 'poslední transakce',
      empty_txs1: 'Zde budou zobrazeny vaše transakce,',
      empty_txs2: 'zatím žádné',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Klikněte zde pro zakoupení Bitcoinu',
    },
    reorder: {
      title: 'Seřadit peěženky',
    },
    add: {
      title: 'přidat peněženku',
      description:
        'Můžete naskenovat zálohovoanou papírovou peněženku (WIF - Wallet Import Format), nevo vytvořit novou peněženku. Segwit peněženky jsou podporovány standardně.',
      scan: 'Skenovat',
      create: 'Vytvořit',
      label_new_segwit: 'Nová SegWit',
      label_new_lightning: 'Nová Lightning',
      wallet_name: 'název peněženky',
      wallet_type: 'typ',
      or: 'nebo',
      import_wallet: 'Importovat peněženku',
      imported: 'Importována',
      coming_soon: 'Již brzy',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Peněženka',
      address: 'Adresa',
      type: 'Typ',
      label: 'Popisek',
      destination: 'cíl',
      description: 'Popis',
      are_you_sure: 'Jste si jistý?',
      yes_delete: 'Ano, smazat',
      no_cancel: 'Ne, zrušit',
      delete: 'Smazat',
      save: 'Uložit',
      delete_this_wallet: 'Smazat peněženku',
      export_backup: 'Exportovat / zálohovat',
      buy_bitcoin: 'Koupit Bitcoin',
      show_xpub: 'Ukázat XPUB',
    },
    export: {
      title: 'exportovat peněženku',
    },
    xpub: {
      title: 'XPUB peněženky',
      copiedToClipboard: 'Zkopírováno do schránky.',
    },
    import: {
      title: 'importovat',
      explanation:
        'Zadejte zde svůj mnemonic seed, privátní klíč, WIF, nebo cokoliv co máte. BlueWallet se pokusí uhodnout správný formát a naimportovat vaší peněženku',
      imported: 'Importováno',
      error: 'Chyba při importu. Prosím ujistěte se, že poskytnutá data jsou správná.',
      success: 'Úspěch',
      do_import: 'Importovat',
      scan_qr: 'nebo raději naskenovat QR kód?',
    },
    scanQrWif: {
      go_back: 'Zpět',
      cancel: 'Zrušit',
      decoding: 'Dekóduji',
      input_password: 'Vložte heslo',
      password_explain: 'Toto je BIP38 zašifrovaný privátní klíč',
      bad_password: 'Špatné heslo',
      wallet_already_exists: 'Tato peněženka již existuje',
      bad_wif: 'Špatný WIF',
      imported_wif: 'Importovaný WIF ',
      with_address: ' s adresou ',
      imported_segwit: 'Importovaná SegWit',
      imported_legacy: 'Importovaná Legacy',
      imported_watchonly: 'Importovaná Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transakce',
      title: 'transakce',
      description: 'Seznam příchozích a odchozích transakcí vašich peněženek',
      conf: 'potvrzení',
    },
    details: {
      title: 'Transakce',
      from: 'Input',
      to: 'Output',
      copy: 'Kopírovat',
      transaction_details: 'Detaily transakce',
      show_in_block_explorer: 'Ukázat v block exploreru',
    },
  },
  send: {
    header: 'Poslat',
    details: {
      title: 'vytvořit transakci',
      amount_field_is_not_valid: 'Čáskta není správně vyplněna',
      fee_field_is_not_valid: 'Poplatek není správně vyplněn',
      address_field_is_not_valid: 'Adresa není správně vyplněna',
      total_exceeds_balance: 'Částka, kterou se snažíte poslat, přesahuje dostupný zůstatek.',
      create_tx_error: 'Nastala chyba při vytváření transakce. Prosím ujistěte se, že adresa je platná.',
      address: 'adresa',
      amount_placeholder: 'částka k odeslání (v BTC)',
      fee_placeholder: 'plus transakční poplatek (v BTC)',
      note_placeholder: 'poznámka pro sebe',
      cancel: 'Zrušit',
      scan: 'Skenovat',
      send: 'Poslat',
      create: 'Vytvořit',
      remaining_balance: 'Zbývající zůstatek',
    },
    confirm: {
      header: 'Potvrdit',
      sendNow: 'Poslat hned',
    },
    success: {
      done: 'Hotovo',
      lnurlpay_repeat: 'Repeat payment',
    },
    create: {
      details: 'Detaily',
      title: 'vytvořit transakci',
      error: 'Chyba při vytváření transakce. Nesprávná adresa nebo částka?',
      go_back: 'Zpět',
      this_is_hex: 'Toto je vaše transakce, podepsána a připravena k odeslání do sítě.',
      to: 'To',
      amount: 'Částka',
      fee: 'Poplatek',
      tx_size: 'velikost transakce',
      satoshi_per_byte: 'Satoshi/byte',
      memo: 'Popisek',
      broadcast: 'Odeslat do sítě',
      not_enough_fee: 'Nedostatečný poplatek. Zvyšte poplatek.',
    },
  },
  receive: {
    header: 'Přijmout',
    details: {
      title: 'Sdílejte tuto adresu s plátcem',
      share: 'sdílet',
      copiedToClipboard: 'Zkopírováno do schránky.',
      label: 'Popis',
      create: 'Create',
      setAmount: 'Přijmout částku...',
    },
  },
  buyBitcoin: {
    header: 'Koupit Bitcoin',
    tap_your_address: 'Klikněte na svojí adresu pro zkopírování do schránky:',
    copied: 'Zkopírováno do schránky.',
  },
  settings: {
    header: 'nastavení',
    plausible_deniability: 'Plausible deniability...',
    storage_not_encrypted: 'Uložiště: nezašifrováno',
    storage_encrypted: 'Úložiště: zašifrováno',
    password: 'Heslo',
    password_explain: 'Vytořte si heslo k zašifrování úložiště.',
    retype_password: 'Heslo znovu',
    passwords_do_not_match: 'Hesla se neshodují',
    encrypt_storage: 'Zašifrovat úložiště',
    lightning_settings: 'Lightning settings',
    lightning_settings_explain:
      'To connect to your own LND node please install LndHub' +
      ' and put its URL here in settings. Leave blank to use default ' +
      'ndHub\n (lndhub.io)',
    electrum_settings: 'Electrum Settings',
    electrum_settings_explain: 'Set to blank to use default',
    save: 'save',
    about: 'O BlueWallet',
    language: 'Jazyk',
    currency: 'Měna',
    advanced_options: 'Advanced Options',
    enable_advanced_mode: 'Enable advanced mode',
  },
  plausibledeniability: {
    title: 'Plausible Deniability',
    help:
      'Za určitých okolností můžete být donuceni k prozrazení vašeho hesla.' +
      'K zajištění bezpečností vašich prostředků, BlueWallet může vytvořit' +
      'další zašifrované úložiště s rozdílný heslem. V případě potřeby' +
      'můžete toto heslo dát třetí straně. Pokud bude zadáno do BlueWallet,' +
      'odemkne nové "falešné" úložiště. Toto bude vypadat legitimně, ale' +
      'udrží vaše pravé hlavní úložiště v bezpečí.',
    help2: 'Nové úložiště bude plně funkční, můžete na něj uložit minimální částku, aby vypadalo více uvěřitelně.',
    create_fake_storage: 'Vytvořit falešné zašifrované úložiště',
    go_back: 'Zpět',
    create_password: 'Vytvořit heslo',
    create_password_explanation: 'Heslo k falešnému úložišti nesmí být stejné jako heslo k hlavnímu úložišti',
    password_should_not_match: 'Heslo k falešnému úložišti nesmí být stejné jako heslo k hlavnímu úložišti',
    retype_password: 'Heslo znovu',
    passwords_do_not_match: 'Hesla se neshodují, zkuste to znovu',
    success: 'Úspěch',
  },
  lnd: {
    title: 'spravovat zůstatek',
    choose_source_wallet: 'Vyberte zdrojovou peněženku',
    refill_lnd_balance: 'Doplnit zůstatek na Lightning peněžence',
    refill: 'Doplnit',
    withdraw: 'Vybrat',
    expired: 'Expirováno',
    placeholder: 'Invoice',
    sameWalletAsInvoiceError: 'You can not pay an invoice with the same wallet used to create it.',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device.",
    ok: 'OK, I wrote this down!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For:',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node:',
  },
};
